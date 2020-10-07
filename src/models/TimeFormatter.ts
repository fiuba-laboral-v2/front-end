import moment from "moment";

export const TimeFormatter = {
  dateTime: (date: string) =>
    moment(date).format("YYYY-MM-DD HH:mm")
};
