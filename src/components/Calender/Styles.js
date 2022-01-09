import styles from './Styles.module.scss';

function isSelected(day, value) {
  return value.isSame(day, 'day');
}
export function beforeToday(day) {
  return day.isBefore(new Date(), 'day');
}
function isToday(day) {
  return day.isSame(new Date(), 'day');
}
export default function dayStyles(day, value) {
  if (beforeToday(day)) return styles.before;
  if (isSelected(day, value)) return styles.selected;
  if (isToday(day)) return styles.today;
  return '';
}
