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
    pathAdd: '/device/list/add',
    pathUpdate: '/device/list/update',
    pathDetail: '/device/list/detail',
  },
  {
    title: 'Dịch vụ',
    path: '/service/list',
    icon: <ForumOutlinedIcon />,
    pathAdd: '/service/list/add',
    pathUpdate: '/service/list/update',
    pathDetail: '/service/list/detail',
  },
  {
    title: 'Cấp số',
    path: '/number-level/list',
    icon: <LayersOutlinedIcon />,
    pathAdd: '/number-level/list/add',
    pathDetail: '/number-level/list/detail',
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
