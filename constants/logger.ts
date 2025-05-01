import winston from "winston";
import path from "path";
import fs from "fs";

export type ContextLogger = {
  info: (message: string) => winston.Logger;
  error: (message: string) => winston.Logger;
  warn: (message: string) => winston.Logger;
  debug: (message: string) => winston.Logger;
};

function getLogFileName(prefix: string, context?: string) {
  const pad = (n: number) => String(n).padStart(2, "0");
  const now = new Date();

  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const time = `${pad(now.getHours())}${pad(now.getMinutes())}`;
  const timestamp = `${date}_${time}`;

  const dateFolder = path.join("logs", date);

  if (!fs.existsSync(dateFolder)) {
    fs.mkdirSync(dateFolder, { recursive: true });
  }

  const contextPart = context ? `_${context}` : "";
  return path.join(dateFolder, `${prefix}${contextPart}_${timestamp}.log`);
}

const commonFormat = winston.format.printf(({ timestamp, level, message, ...meta }) => {
  const context = meta.context;
  delete meta.context;

  let output = `${timestamp} [${level}]${context ? ` [${context}]` : ""}: ${message}`;

  // Check if there are metadata properties besides internal Winston properties
  const metaWithoutInternals = { ...meta };
  delete meta.metadata;
  delete meta.service;

  // Get actual data from metadata (could be in meta.metadata or directly in meta)
  const data = meta.metadata || metaWithoutInternals;

  if (data && Object.keys(data).length > 0) {
    output += `\nData: ${JSON.stringify(data, null, 2)}`;
  }

  return output + "\n"; // Add extra newline for separation
});

const fileFormat = winston.format.combine(winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston.format.uncolorize(), commonFormat);

const consoleFormat = winston.format.combine(winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston.format.colorize(), commonFormat);

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  transports: [
    new winston.transports.Console({ format: consoleFormat }),
    new winston.transports.File({
      filename: getLogFileName("error"),
      level: "error",
      format: fileFormat,
    }),
    new winston.transports.File({
      filename: getLogFileName("combined"),
      format: fileFormat,
    }),
  ],
});

export const createContextLogger = (context: string) => {
  const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || "info",
    transports: [
      new winston.transports.Console({ format: consoleFormat }),
      new winston.transports.File({
        filename: getLogFileName("error", context),
        level: "error",
        format: fileFormat,
      }),
      new winston.transports.File({
        filename: getLogFileName("combined", context),
        format: fileFormat,
      }),
    ],
  });

  return {
    info: (message: string) => logger.info(message),
    error: (message: string) => logger.error(message),
    warn: (message: string) => logger.warn(message),
    debug: (message: string) => logger.debug?.(message),
  };
};
