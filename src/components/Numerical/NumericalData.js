import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

export const numericalData = [
  {
    icon: <CalendarTodayIcon />,
    text: 'Số thứ tự đã cấp',
    number: 4.221,
    arrow: <ArrowUpwardIcon />,
    percent: '32,41%',
  },
  {
    icon: <EventAvailableIcon />,
    text: 'Số thứ tự đã sử dụng',
    number: 3.721,
    arrow: <ArrowDownwardIcon />,
    percent: '32,41%',
  },
  {
    icon: <ContactPhoneIcon />,
    text: 'Số thứ tự đang chờ',
    number: 468,
    arrow: <ArrowUpwardIcon />,
    percent: '32,41%',
  },
  {
    icon: <BookmarkRemoveIcon />,
    text: 'Số thứ tự đã bỏ qua',
    number: 32,
    arrow: <ArrowDownwardIcon />,
    percent: '22,41%',
  },
];
