import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

export const MenuBarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardOutlinedIcon />,
  },
  {
    title: 'Thiết bị',
    path: '/device/list',
    icon: <DesktopWindowsOutlinedIcon />,
  },
  {
    title: 'Dịch vụ',
    path: '/service/list',
    icon: <ForumOutlinedIcon />,
  },
  {
    title: 'Cấp số',
    path: '/number-level/list',
    icon: <LayersOutlinedIcon />,
  },
  {
    title: 'Báo cáo',
    path: '/report/list',
    icon: <AssessmentOutlinedIcon />,
  },
  {
    title: 'Cài đặt hệ thống',
    path: '/systems',
    icon: <SettingsOutlinedIcon />,
    openIcon: <MoreVertOutlinedIcon />,
  },
];
