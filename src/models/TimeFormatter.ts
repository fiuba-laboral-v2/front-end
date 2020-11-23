import moment from "moment";

export const TimeFormatter = {
  dateTime: (date: string) => moment(date).format("YYYY-MM-DD HH:mm"),
  date: (date: string) => moment(date).format("DD-MM-YYYY")
};
