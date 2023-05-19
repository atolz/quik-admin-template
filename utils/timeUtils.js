export function extractMonth(dateString) {
  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = monthNames[monthIndex];
  return monthName;
}

export function formatDateDay(dateString) {
  const date = new Date(dateString);
  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  return day.toString();
}

export function formatDateYYMMDD(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}

export function formatTimeHHMMSS(dateString) {
  const date = new Date(dateString);
  console.log("hours is", date.getHours());
  let hourOffset = date.getHours() - 1;
  const hours = ("0" + hourOffset).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  const formattedTime = hours + ":" + minutes + ":" + seconds;
  return formattedTime;
}

export function timeToISOString(timeStr) {
  // Split the time string into hours, minutes, and seconds
  const [hours, minutes = 0, seconds = 0] = timeStr.split(":");
  let hourOffset = parseInt(hours) + 1;
  console.log(hourOffset, hours);
  // Create a new Date object with today's date and the given time
  const dateObj = new Date();
  dateObj.setHours(hourOffset);
  dateObj.setMinutes(minutes);
  dateObj.setSeconds(seconds);

  // Format the date as an ISO string and return it
  return dateObj.toISOString();
}

export function isoToAmPmTimeString(isoDateString) {
  // Parse the ISO date string into a Date object
  const dateObj = new Date(isoDateString);

  // Extract the hours, minutes, and seconds components
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  // Convert the hours component to 12-hour format
  const amPm = hours >= 12 ? "pm" : "am";
  let twelveHour = hours % 12 || 12;
  twelveHour = twelveHour - 1;

  // Format the time string as "hh:mm:ss am/pm"
  const timeStr = `${twelveHour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${amPm}`;

  // Return the formatted time string
  return timeStr;
}
