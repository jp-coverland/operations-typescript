import winston, { format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";
import fs from "fs";

export const getLogger = (callingDirectory: string, context: string) => {
  const logDirectory = path.resolve(callingDirectory, "logs");

  const pad = (n: number) => String(n).padStart(2, "0");
  const now = new Date();

  const runTimeStamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(
    now.getSeconds()
  )}`;

  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  const commonFormat = format.printf(({ timestamp, level, message, ...meta }) => {
    let output = `${timestamp} [${level}]: ${message}`;

    const metaWithoutInternals = { ...meta };
    delete metaWithoutInternals.metadata;
    delete metaWithoutInternals.service;

    const data = meta.metadata || metaWithoutInternals;

    if (data && Object.keys(data).length > 0) {
      output += `\nData: ${JSON.stringify(data, null, 2)}`;
    }

    return output + "\n";
  });

  const fileFormat = format.combine(format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), format.uncolorize(), commonFormat);

  const consoleFormat = format.combine(format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), format.colorize(), commonFormat);

  const infoLogFile = `combined_${context}_${runTimeStamp}.log`;

  const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || "info",

    transports: [
      //   new transports.Console({ format: consoleFormat }),
      new DailyRotateFile({
        dirname: path.resolve(logDirectory),
        filename: "error_%DATE%.log",
        datePattern: "YYYY-MM-DD",
        level: "error",
        format: fileFormat,
        zippedArchive: false,
        maxFiles: "14d",
      }),
      new transports.File({
        dirname: path.resolve(logDirectory),
        filename: `combined_${context}_${runTimeStamp}.log`,
        format: fileFormat,
      }),
    ],
  });

  return {
    info: (msg: string, meta: object = {}) => logger.info(msg, { context, ...meta }),
    error: (msg: string, meta: object = {}) => logger.error(msg, { context, ...meta }),
    warn: (msg: string, meta: object = {}) => logger.warn(msg, { context, ...meta }),
    debug: (msg: string, meta: object = {}) => logger.debug(msg, { context, ...meta }),
  };
};
