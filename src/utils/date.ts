import moment from 'moment';
import { DATE_FORMAT } from 'config/constants';

export function convertTimestampToDate(timestamp: number = 0): Date {
  return moment.unix(timestamp).toDate();
}

export function formatDate(
  timestamp: number,
  format: string = DATE_FORMAT,
): string {
  return moment.unix(timestamp).format(format);
}

export function formatDateTime(
  dateTime: string,
  format: string = DATE_FORMAT,
): string {
  return moment(dateTime).format(format);
}

export function timeAgo(timestamp: number): string {
  return moment.unix(timestamp).fromNow();
}

export function getTimestamp(): number {
  return moment().unix();
}
