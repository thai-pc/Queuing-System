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
    path: '/equipment',
    icon: <DesktopWindowsOutlinedIcon />,
  },
  {
    title: 'Dịch vụ',
    path: '/service',
    icon: <ForumOutlinedIcon />,
  },
  {
    title: 'Cấp số',
    path: '/number-level',
    icon: <LayersOutlinedIcon />,
  },
  {
    title: 'Báo cáo',
    path: '/report',
    icon: <AssessmentOutlinedIcon />,
  },
  {
    title: 'Cài đặt hệ thống',
    path: '/systems',
    icon: <SettingsOutlinedIcon />,
    openIcon: <MoreVertOutlinedIcon />,
    subNav: [
      {
        title: 'Quản lý vai trò',
        path: '/systems/role',
      },
      {
        title: 'Quản lý tài khoản',
        path: '/systems/account',
      },
      {
        title: 'Nhật ký người dùng',
        path: '/systems/diary',
      },
    ],
  },
];
