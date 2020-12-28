import moment from "moment";

export const TimeFormatter = {
  dateTime: (date: string) => moment(date).format("DD/MM/YYYY HH:mm"),
  date: (date: string) => moment(date).format("DD/MM"),
  daysFromNowInDate: (days: number) => moment().endOf("day").add(days, "days").format("DD/MM")
};
