import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';

const MENU_ITEMS = {
  pageLayout: {
    title: 'Page Layout',
    icon: DashboardOutlinedIcon,
    subitems: [
      {
        title: 'Theme',
      },
      {
        title: 'Hero Section',
      },
      {
        title: 'Section 1',
      },
      {
        title: 'Section 2',
      },
      {
        title: 'Section 3',
      },
    ],
  },
  contacts: {
    title: 'Contacts',
    icon: GroupAddOutlinedIcon,
  },
  chat: {
    title: 'Chat',
    icon: TextsmsOutlinedIcon,
  },
  pricing: {
    title: 'Pricing',
    icon: AttachMoneyIcon,
  },
  eventAgenda: {
    title: 'Event Agenda',
    icon: FormatListBulletedOutlinedIcon,
  },
  analytics: {
    title: 'Analytics',
    icon: BarChartOutlinedIcon,
  },
  profile: {
    title: 'Profile',
    icon: AccountBoxOutlinedIcon,
  },
};

const NAVIGATION_ITEMS = [
  MENU_ITEMS.pageLayout,
  MENU_ITEMS.contacts,
  MENU_ITEMS.chat,
  MENU_ITEMS.pricing,
  MENU_ITEMS.eventAgenda,
  MENU_ITEMS.analytics,
  MENU_ITEMS.profile,
];

export { NAVIGATION_ITEMS };
