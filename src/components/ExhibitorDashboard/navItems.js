import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import Contacts from 'components/ExhibitorDashboard/Contacts';
import ExhibitorLayoutTheme from 'components/ExhibitorDashboard/Theme';
import ExhibitorChatPage from 'components/ExhibitorDashboard/Chat';
import Bleh from 'components/ExhibitorDashboard/Layouts';

const MENU_ITEMS = {
  pageLayout: {
    id: 'layout',
    title: 'Page Layout',
    icon: DashboardOutlinedIcon,
    subitems: [
      {
        id: 'theme',
        title: 'Theme',
        component: ExhibitorLayoutTheme,
      },
      {
        id: 'hero',
        title: 'Hero Section',
        component: Bleh,
      },
      {
        id: 'section1',
        title: 'Section 1',
        component: Bleh,
      },
      {
        id: 'section2',
        title: 'Section 2',
        component: Bleh,
      },
      {
        id: 'section3',
        title: 'Section 3',
        component: Bleh,
      },
    ],
  },
  contacts: {
    id: 'contacts',
    title: 'Contacts',
    icon: GroupAddOutlinedIcon,
    component: Contacts,
  },
  chat: {
    id: 'chat',
    title: 'Chat',
    icon: TextsmsOutlinedIcon,
    component: ExhibitorChatPage,
  },
  pricing: {
    id: 'pricing',
    title: 'Pricing',
    icon: AttachMoneyIcon,
    component: Bleh,
  },
  eventAgenda: {
    id: 'event',
    title: 'Event Agenda',
    icon: FormatListBulletedOutlinedIcon,
    component: Bleh,
  },
  analytics: {
    id: 'analytics',
    title: 'Analytics',
    icon: BarChartOutlinedIcon,
    component: Bleh,
  },
  profile: {
    id: 'profile',
    title: 'Profile',
    icon: AccountBoxOutlinedIcon,
    component: Bleh,
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
