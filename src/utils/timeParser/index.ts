import { addMinutes } from "date-fns";

const timeOffsets = {
  "Asia/Tokyo": 9 * 60,
  // 他のタイムゾーンにも対応可能
  // "America/New_York": -5 * 60,
  // "Europe/London": 0,
  // ...
} as const satisfies Record<string, number>;

type TimeZone = keyof typeof timeOffsets;

const utcToZonedTime = (target: Date | string, timeZone: TimeZone) => {
  const offset = timeOffsets[timeZone];
  return addMinutes(target, offset);
};

/**
 * 日時を修正して返す
 */
export const parseFixedDate = (target: Date | string) => {
  const timeZone = "Asia/Tokyo";
  const formattedDate = utcToZonedTime(target, timeZone);
  const year = formattedDate.getUTCFullYear();
  const month = formattedDate.getUTCMonth() + 1;
  const day = formattedDate.getUTCDate();

  return `${year}.${month}.${day}`;
};
