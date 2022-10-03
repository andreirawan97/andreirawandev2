export default function getCurrentDateString() {
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();

  return `${day[d.getDay()]}, ${d.getDate()} ${
    month[d.getMonth()]
  } ${d.getFullYear()}`;
}
