import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const proflie = [
  {
    title: 'Thông tin cá nhân',
    path: '/proflie',
  },
];

export const dashboard = [
  {
    title: 'Dashboard',
    path: '/dashboard',
  },
];

export const device = [
  {
    title: 'Thiết bị',
    path: '/device/list',
    icon: <ChevronRightIcon />,
    titleSub: 'Danh sách thiết bị',
    Child: [
      {
        icon: <ChevronRightIcon />,
        title: 'Thêm thiết bị',
        path: '/device/list/add',
      },
      {
        icon: <ChevronRightIcon />,
        title: 'Chi tiết thiết bị',
        path: '/device/list/detail',
      },
      {
        icon: <ChevronRightIcon />,
        title: 'Cập nhật thiết bị',
        path: '/device/list/update',
      },
    ],
  },
];
export const service = [
  {
    title: 'Dịch vụ',
    path: '/service/list',
    icon: <ChevronRightIcon />,
    titleSub: 'Danh sách dịch vụ',
    Child: [
      {
        icon: <ChevronRightIcon />,
        title: 'Thêm dịch vụ',
        path: '/service/list/add',
      },
      {
        icon: <ChevronRightIcon />,
        title: 'Chi tiết',
        path: '/device/list/detail',
        ChildSub: [
          {
            icon: <ChevronRightIcon />,
            title: 'Cập nhật',
            path: '/service/list/detail/update',
          },
        ],
      },
    ],
  },
];
export const number = [
  {
    title: 'Cấp số',
    path: '/number-level/list',
    icon: <ChevronRightIcon />,
    titleSub: 'Danh sách cấp số',
    Child: [
      {
        icon: <ChevronRightIcon />,
        title: 'Cấp số mới',
        path: '/number-level/list/add',
      },
      {
        icon: <ChevronRightIcon />,
        title: 'Chi tiết',
        path: '/number-level/list/detail',
      },
    ],
  },
];
export const report = [
  {
    title: 'Báo cáo',
    path: '/report/list',
    icon: <ChevronRightIcon />,
    titleSub: 'Lập báo cáo',
  },
];
export const Role = [
  {
    title: 'Cài đặt hệ thống',
    path: '/system/role',
    icon: <ChevronRightIcon />,
    titleSub: 'Quản lý vai trò',
    Child: [
      {
        icon: <ChevronRightIcon />,
        title: 'Thêm vai trò',
        path: '/system/role/add',
      },
      {
        icon: <ChevronRightIcon />,
        title: 'Cập nhật vai trò',
        path: '/system/role/update',
      },
    ],
  },
];
export const Account = [
  {
    title: 'Cài đặt hệ thống',
    path: '/systems/account',
    icon: <ChevronRightIcon />,
    titleSub: 'Quản lý tài khoản',
    Child: [
      {
        icon: <ChevronRightIcon />,
        title: 'Thêm tài khoản',
        path: '/systems/account/add',
      },
      {
        icon: <ChevronRightIcon />,
        title: 'Cập nhật tài khoản',
        path: '/systems/account/update',
      },
    ],
  },
];
export const Diary = [
  {
    title: 'Cài đặt hệ thống',
    path: '/systems/diary',
    icon: <ChevronRightIcon />,
    titleSub: 'Nhật ký người dùng',
  },
];
