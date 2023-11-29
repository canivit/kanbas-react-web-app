import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const { pathname } = useLocation();
  const navigationItems: NavigationItemProps[] = [
    {
      text: "Home",
      route: "home",
      isActive: false,
    },
    {
      text: "Search",
      route: "search",
      isActive: false,
    },
    {
      text: "Signin",
      route: "signin",
      isActive: false,
    },
    {
      text: "Signup",
      route: "signup",
      isActive: false,
    },
    {
      text: "Account",
      route: "account",
      isActive: false,
    },
  ];

  return (
    <ul className="list-group">
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.text}
          text={item.text}
          route={item.route}
          isActive={pathname.includes(item.route)}
        />
      ))}
    </ul>
  );
}

function NavigationItem({ text, route, isActive }: NavigationItemProps) {
  return (
    <Link to={route} className="text-decoration-none">
      <li className={`list-group-item ${isActive ? "active" : ""}`}>{text}</li>
    </Link>
  );
}

type NavigationItemProps = {
  text: string;
  route: string;
  isActive: boolean;
};
