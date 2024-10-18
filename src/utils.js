import { format } from 'date-fns';

export function formatTimestamp(timeStamp) {
  const date = new Date(timeStamp * 1000);
  return format(date, "do EEE");
}