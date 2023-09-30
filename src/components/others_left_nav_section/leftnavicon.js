import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const navbars = [
  {
    icon: HomeIcon,
    name: "Home",
    render: "/",
  },
  {
    icon: ExploreIcon,
    name: "Explore",
    render: "/explore",
  },
  {
    icon: BookmarkIcon,
    name: "bookmark",
    render: "/bookmark",
  },
  {
    icon: CircleNotificationsIcon,
    name: "Notification",
    render: "/",
  },
  {
    icon: MessageIcon,
    name: "Message",
    render: "/messages/thread",
  },
  {
    icon: AccountCircleIcon,
    name: "Profile",
    render: `/${localStorage.getItem("username")}`,
  },
];

export const Bottom_navbars = [
  {
    icon: HomeIcon,
    render: "/",
  },
  {
    icon: SearchOutlinedIcon,
    render: "/explore",
  },
  {
    icon: AddCircleIcon,
    render: "/",
  },
  {
    icon: CircleNotificationsIcon,
    render: "/notification",
  },
  {
    icon: MessageIcon,
    render: "/messages/thread",
  },
];
