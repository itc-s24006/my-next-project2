// 日本時間を考慮した日付表示

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatData = (data: string) => {
  return dayjs.utc(data).tz("Asia/Tokyo").format("YYYY.MM.DD");
};
