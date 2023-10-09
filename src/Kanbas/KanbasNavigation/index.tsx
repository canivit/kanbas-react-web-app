import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faBook,
  faCalendarDays,
  faCircleQuestion,
  faClock,
  faEnvelope,
  faGauge,
  faRightToBracket,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import neuLogo from "./northeastern.png";

export function KanbasNavigation() {
  const { pathname } = useLocation();

  const navigationItems: NavigationItemProps[] = [
    {
      text: "Account",
      route: "Account",
      icon: faUser,
      isActive: false,
    },
    {
      text: "Dashboard",
      route: "Dashboard",
      icon: faGauge,
      isActive: false,
    },
    {
      text: "Courses",
      route: "Courses",
      icon: faBook,
      isActive: false,
    },
    {
      text: "Calendar",
      route: "Calendar",
      icon: faCalendarDays,
      isActive: false,
    },
    {
      text: "Inbox",
      route: "Inbox",
      icon: faEnvelope,
      isActive: false,
    },
    {
      text: "History",
      route: "History",
      icon: faClock,
      isActive: false,
    },
    {
      text: "Studio",
      route: "Studio",
      icon: faVideo,
      isActive: false,
    },
    {
      text: "Commons",
      route: "Commons",
      icon: faRightToBracket,
      isActive: false,
    },
    {
      text: "Help",
      route: "Help",
      icon: faCircleQuestion,
      isActive: false,
    },
  ];

  return (
    <div className="wd-kanbas-navigation">
      <MainLogo />
      {navigationItems.map((item) =>
        NavigationItem({ ...item, isActive: pathname.includes(item.route) })
      )}
    </div>
  );
}

function NavigationItem({ text, icon, route, isActive }: NavigationItemProps) {
  return (
    <Link key={text} to={route} className="text-decoration-none">
      <div
        className={`py-2 wd-kanbas-navigation-item ${
          isActive && "wd-kanbas-navigation-item-active"
        }`}
      >
        <FontAwesomeIcon icon={icon} size="xl" style={{ color: "red" }} />
        <br />
        {text}
      </div>
    </Link>
  );
}

interface NavigationItemProps {
  text: string;
  icon: IconDefinition;
  route: string;
  isActive: boolean;
}

function MainLogo() {
  return (
    <div className="pb-2">
      <img className="img-fluid" src={neuLogo} />
    </div>
  );
}
