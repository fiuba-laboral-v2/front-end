import moment from "moment";

export const TimeFormatter = {
  dateTime: (date: string) => moment(date).format("DD/MM/YYYY HH:mm"),
  date: (date: string) => moment(date).format("DD/MM")
};
