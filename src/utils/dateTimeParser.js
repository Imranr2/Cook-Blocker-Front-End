export default function parseDateTimeString(dateTimeString) {
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
  const date = new Date(dateTimeString);
  return (
    date.getDate() +
    " " +
    MM[date.getMonth() + 1] +
    " " +
    date.getFullYear() +
    " " +
    (date.getHours() - 12) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    "" +
    (date.getHours() > 12 ? "PM" : "AM")
  );
}
