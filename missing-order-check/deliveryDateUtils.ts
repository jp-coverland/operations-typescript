import { DateTime } from "luxon";
import { TCartItem } from "./types";

// Define shipping zone configuration
interface ShippingZoneConfig {
  states: string[];
  daysToAdd: number;
  timezone: string; // Timezone for the shipping destination
}

const STATE_2_DAY = ["CA", "NV", "UT", "AZ"];

const STATE_3_DAY = ["OR", "WA", "ID", "MT", "WY", "CO", "NM", "TX", "OK"];

const STATE_4_DAY = [
  "ND",
  "SD",
  "NE",
  "KS",
  "MN",
  "IA",
  "MO",
  "AR",
  "LA",
  "MI",
  "WI",
  "IL",
  "MS",
  "IN",
  "OH",
  "KY",
  "TN",
  "AL",
  "FL",
  "GA",
  "SC",
  "NC",
  "VA",
  "WV",
  "PA",
  "DE",
  "MD",
  "NJ",
];
const STATE_5_DAY = ["NY", "CT", "RI", "MA", "NH", "VT", "ME", "HI"];

const STATE_7_DAY = ["AK"];

// Define shipping zones based on states and their delivery times
const SHIPPING_ZONES: ShippingZoneConfig[] = [
  {
    states: STATE_2_DAY,
    daysToAdd: 2,
    timezone: "America/Los_Angeles",
  },
  {
    states: STATE_3_DAY,
    daysToAdd: 3,
    timezone: "America/Denver",
  },
  {
    states: STATE_4_DAY,
    daysToAdd: 4,
    timezone: "America/Chicago",
  },
  {
    states: STATE_5_DAY,
    daysToAdd: 5,
    timezone: "America/New_York",
  },
  {
    states: STATE_7_DAY,
    daysToAdd: 7,
    timezone: "America/Anchorage",
  },
];

export const getClientTimeZone = (): string => {
  const timeZoneOffset: number = new Date().getTimezoneOffset();
  const clientTimeZone: string = DateTime.local().zoneName;
  // Timezone offset in minutes for PST, MST, CST, EST
  const PST: number = 480; // UTC -8
  const MST: number = 420; // UTC -7
  const CST: number = 360; // UTC -6
  const EST: number = 300; // UTC -5

  // Converting the offset to the string commonly returned by Intl.DateTimeFormat().resolvedOptions().timeZone
  if (timeZoneOffset === PST) {
    return "America/Los_Angeles";
  } else if (timeZoneOffset === MST) {
    return "America/Denver";
  } else if (timeZoneOffset === CST) {
    return "America/Chicago";
  } else if (timeZoneOffset === EST) {
    return "America/New_York";
  } else {
    return clientTimeZone || "UTC";
  }
};

// Helper function to convert timezone to state
const getDefaultStateFromTimezone = (timezone: string): string => {
  const timezoneStateMap: { [key: string]: string } = {
    "America/Los_Angeles": "CA",
    "America/Denver": "CO",
    "America/Chicago": "IL",
    "America/New_York": "NY",
    "America/Anchorage": "AK",
  };

  return timezoneStateMap[timezone] || "NY"; // Default to NY if timezone not found
};

const DEFAULT_DELIVERY_DAYS = 5;
const CUTOFF_HOUR = 11; // 11 AM
const DEFAULT_TIMEZONE = "America/Los_Angeles"; // Default timezone for warehouse location

export const determineDeliveryByDateByShippingState = (
  shippingState: string = "NY",
  format = "LLL dd",
  preorderDate?: string,
  warehouseTimezone: string = DEFAULT_TIMEZONE // Add parameter for warehouse timezone
): string => {
  // Convert state to uppercase for consistency
  const effectiveState = shippingState ? shippingState.toUpperCase() : getDefaultStateFromTimezone(getClientTimeZone());

  // Find shipping zone configuration for the destination state
  const shippingZone = SHIPPING_ZONES.find((zone) => zone.states.includes(effectiveState));

  // Get warehouse current time
  const warehouseNow = preorderDate ? DateTime.fromISO(preorderDate).setZone(warehouseTimezone) : DateTime.now().setZone(warehouseTimezone);

  // Get base shipping days based on day of week and time
  const shippingDaysToAdd = getShippingDaysToAdd(warehouseNow);

  // Calculate shipping date
  const shippingDate = warehouseNow.plus({ days: shippingDaysToAdd });

  // Add transit days based on shipping zone
  const totalDaysToAdd = shippingZone?.daysToAdd ?? DEFAULT_DELIVERY_DAYS;

  // Calculate delivery date, ensuring we only count business days
  let deliveryDate = shippingDate;
  let remainingDays = totalDaysToAdd;

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.plus({ days: 1 });
    if (isBusinessDay(deliveryDate)) {
      remainingDays--;
    }
  }

  // Convert final date to destination timezone for display
  // Setting default to NY for max days if time zone unknown
  const destinationTimezone = shippingZone?.timezone || "America/New_York";
  return deliveryDate.setZone(destinationTimezone).toFormat(format);
};

// Helper function to check if a date is a business day
const isBusinessDay = (date: DateTime): boolean => {
  return date.weekday >= 1 && date.weekday <= 5;
};

// Helper function to validate state code
export const isValidStateCode = (stateCode: string): boolean => {
  return SHIPPING_ZONES.some((zone) => zone.states.includes(stateCode.toUpperCase()));
};

// Optional: Helper function to get shipping zone info for a state
export const getShippingZoneInfo = (stateCode: string): ShippingZoneConfig | undefined => {
  return SHIPPING_ZONES.find((zone) => zone.states.includes(stateCode.toUpperCase()));
};

/**
 * Determines the delivery by date.
 * Orders placed by 11 AM PT (Tuesday-Saturday) ship the same day.
 * Weekend orders (placed after 11 AM PT on Saturday) ship on Monday.
 * Monday orders(12AM-12AM) ship on Tuesday.
 * Delivery takes up to 5 business days after shipping.
 * Currently don't know what to do for other time zones and defaulting to 5 days later.
 *
 * @param format string : format of the date output | default -> "Jul 15" | "EEE, LLL dd" -> "Mon, Jul 15"
 * @returns string
 */
export const determineDeliveryByDate = (format = "LLL dd", preorder_date?: string): string => {
  const clientTimeZone: string = getClientTimeZone();
  let now: DateTime = DateTime.now().setZone(clientTimeZone);
  let daysToAdd: number;

  if (preorder_date) {
    now = DateTime.fromISO(preorder_date).setZone(clientTimeZone);
  }

  const shippingDaysToAdd = getShippingDaysToAdd(now);

  switch (clientTimeZone) {
    case "America/Los_Angeles": // PST
      daysToAdd = 2;
      break;
    case "America/Denver": // MST
      daysToAdd = 3;
      break;
    case "America/Chicago": // CST
      daysToAdd = 4;
      break;
    case "America/New_York": // EST
      daysToAdd = 4;
      break;
    case "Unknown":
      daysToAdd = 5;
      break;
    default:
      daysToAdd = 5; // Default for "other" cases
  }

  // Add shipping days and transit days
  let deliveryDate = now.plus({ days: shippingDaysToAdd });
  let remainingDays = daysToAdd;

  // Add transit days, counting only business days
  while (remainingDays > 0) {
    deliveryDate = deliveryDate.plus({ days: 1 });
    if (isBusinessDay(deliveryDate)) {
      remainingDays--;
    }
  }

  return deliveryDate.toFormat(format);
};

/**
 * Checks the time difference between now and the date.
 * Will return 1-4 weeks, after that will do by months.
 * @param date
 * @returns
 */
export const checkTimeDifference = (date: string): string => {
  const targetDate = DateTime.fromISO(date);
  const now = DateTime.now();

  const diffInWeeks = Math.abs(now.diff(targetDate, "weeks").weeks);
  const diffInMonths = Math.abs(now.diff(targetDate, "months").months);

  if (diffInWeeks <= 1) {
    return "1 week";
  } else if (diffInWeeks > 1 && diffInWeeks <= 4) {
    return `${Math.round(diffInWeeks)} weeks`;
  } else if (diffInMonths <= 1) {
    return "1 month";
  } else {
    return `${Math.round(diffInMonths)} months`;
  }
};

const getShippingDaysToAdd = (dateTime: DateTime): number => {
  const dayOfWeek = dateTime.weekday; // 1 = Monday, 7 = Sunday
  const hour = dateTime.hour;

  // Monday (all day): Ships Tuesday
  if (dayOfWeek === 1) {
    return 1;
  }

  // Saturday after 11 AM: Ships Monday
  if (dayOfWeek === 6 && hour >= CUTOFF_HOUR) {
    return 2; // Skip to Monday
  }

  // Sunday: Ships Monday
  if (dayOfWeek === 7) {
    return 1;
  }

  // Tuesday-Saturday before cutoff: Ships same day
  if (hour < CUTOFF_HOUR) {
    return 0;
  }

  // After cutoff: Ships next business day
  return 1;
};

export const determineShippingDate = (): string | null => {
  const currentDate = DateTime.now().setZone("America/Los_Angeles"); // Ensure PST

  const daysToAdd = getShippingDaysToAdd(currentDate);
  let shippingDate = currentDate.plus({ days: daysToAdd });

  // Ensure shipping date does not fall on Sunday (move to Monday if necessary)
  if (shippingDate.weekday === 7) {
    shippingDate = shippingDate.plus({ days: 1 });
  }

  // Set time to 11:00 AM Pacific Time
  shippingDate = shippingDate.set({ hour: 11, minute: 0, second: 0 });

  return shippingDate.toISO(); // Returns "YYYY-MM-DDTHH:mm:ss-08:00"
};

export const determineEarliestShippingDate = (cartItems: TCartItem[]): string | null => {
  if (cartItems.length === 0) return null;

  const shippingDates = cartItems
    .map((cartItem) => {
      if (!cartItem?.preorder) {
        return determineShippingDate(); // Compute new shipping date
      } else if (cartItem?.preorderDate) {
        return DateTime.fromISO(cartItem.preorderDate)
          .setZone("America/Los_Angeles") // Convert to PST
          .set({ hour: 11, minute: 0, second: 0 }) // Ensure 11 AM PST
          .toISO(); // Format as ISO 8601
      }
      return null;
    })
    .filter((date): date is string => !!date); // Remove null values

  if (shippingDates.length === 0) return null;

  // Convert dates to DateTime objects and find the earliest one
  const earliestDate = shippingDates
    .map((date) => DateTime.fromISO(date))
    .filter((dt) => dt.isValid)
    .reduce((min, dt) => (dt < min ? dt : min), DateTime.fromISO(shippingDates[0]));

  return earliestDate.toISO(); // Returns "YYYY-MM-DDTHH:mm:ss-08:00"
};
