const MM = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Ap",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export function parseDateTimeString(dateTimeString) {
  const date = new Date(dateTimeString);
  return (
    date.getDate() +
    " " +
    MM[date.getMonth() + 1] +
    " " +
    date.getFullYear() +
    " " +
    (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    "" +
    (date.getHours() > 12 ? "PM" : "AM")
  );
}

export function getDateFromTimeStamp(timeStamp) {
  const date = new Date(timeStamp);
  return (
    date.getDate() + " " + MM[date.getMonth() + 1] + " " + date.getFullYear()
  );
}

export function getTimeFromTimeStamp(timeStamp) {
  const date = new Date(timeStamp);
  return (
    (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    "" +
    (date.getHours() > 12 ? "PM" : "AM")
  );
}
