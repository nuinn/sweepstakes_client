export default function convertDate(utcDateStr) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const eventDate = new Date(utcDateStr);
  const today = new Date();
  const eventDay = eventDate.getDate()
  const dateToday = today.getDate()

  const isToday = (
    eventDay === dateToday &&
    eventDate.getMonth() === today.getMonth() &&
    eventDate.getFullYear() === today.getFullYear()
  );
  const isTomorrow = (eventDay - dateToday) === 1;
  const isThisWeek = (eventDay - dateToday) < 7 && (eventDay - dateToday) > 0;

  const hours = eventDate.getHours().toString();
  const minutes = eventDate.getMinutes().toString().padStart(2, '0');

  if (isToday) {
    return `Today at ${hours}:${minutes}`;
  }
  if (isTomorrow) {
    return `Tomorrow at ${hours}:${minutes}`;
  }
  const dayOfWeek = daysOfWeek[eventDate.getDay()]
  if (isThisWeek) {
    return `${dayOfWeek} at ${hours}:${minutes}`
  }
  return `${dayOfWeek}, ${eventDate.getDate()} ${monthsOfYear[eventDate.getMonth()-1]} at ${hours}:${minutes}`
}