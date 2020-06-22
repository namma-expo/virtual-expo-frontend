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
import ExhibitorHeroSection from 'components/ExhibitorDashboard/HeroSection';
import ExhibitorSection1 from 'components/ExhibitorDashboard/SectionOne';
import Bleh from 'components/ExhibitorDashboard/Layouts';

const DASHBOARD_BASE_URL = '/dashboard';

const PAGE_LAYOUT_SUBITEMS = [
  {
    id: 'theme',
    title: 'Theme',
    component: ExhibitorLayoutTheme,
    path: `${DASHBOARD_BASE_URL}/theme`,
  },
  {
    id: 'hero',
    title: 'Hero Section',
    component: ExhibitorHeroSection,
    path: `${DASHBOARD_BASE_URL}/hero`,
  },
  {
    id: 'section1',
    title: 'Section 1',
    component: ExhibitorSection1,
    path: `${DASHBOARD_BASE_URL}/section1`,
  },
  {
    id: 'section2',
    title: 'Section 2',
    component: Bleh,
    path: `${DASHBOARD_BASE_URL}/section2`,
  },
  {
    id: 'section3',
    title: 'Section 3',
    component: Bleh,
    path: `${DASHBOARD_BASE_URL}/section3`,
  },
];

const MENU_ITEMS = {
  pageLayout: {
    id: 'layout',
    title: 'Page Layout',
    icon: DashboardOutlinedIcon,
    path: `${DASHBOARD_BASE_URL}/layout`,
    subitems: PAGE_LAYOUT_SUBITEMS,
  },
  contacts: {
    id: 'contacts',
    title: 'Contacts',
    icon: GroupAddOutlinedIcon,
    component: Contacts,
    path: `${DASHBOARD_BASE_URL}/contacts`,
  },
  chat: {
    id: 'chat',
    title: 'Chat',
    icon: TextsmsOutlinedIcon,
    component: ExhibitorChatPage,
    path: `${DASHBOARD_BASE_URL}/chat`,
  },
  pricing: {
    id: 'pricing',
    title: 'Pricing',
    icon: AttachMoneyIcon,
    component: Bleh,
    path: `${DASHBOARD_BASE_URL}/pricing`,
  },
  eventAgenda: {
    id: 'event',
    title: 'Event Agenda',
    icon: FormatListBulletedOutlinedIcon,
    component: Bleh,
    path: `${DASHBOARD_BASE_URL}/event`,
  },
  analytics: {
    id: 'analytics',
    title: 'Analytics',
    icon: BarChartOutlinedIcon,
    component: Bleh,
    path: `${DASHBOARD_BASE_URL}/analytics`,
  },
  profile: {
    id: 'profile',
    title: 'Profile',
    icon: AccountBoxOutlinedIcon,
    component: Bleh,
    path: `${DASHBOARD_BASE_URL}/profile`,
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

const ROUTE_ITEMS = [
  MENU_ITEMS.pageLayout,
  MENU_ITEMS.contacts,
  MENU_ITEMS.chat,
  MENU_ITEMS.pricing,
  MENU_ITEMS.eventAgenda,
  MENU_ITEMS.analytics,
  MENU_ITEMS.profile,
  ...MENU_ITEMS.pageLayout.subitems,
];

export { NAVIGATION_ITEMS, ROUTE_ITEMS };
