import { Link, useLocation } from "react-router-dom";
import "./CourseNavigation.css";

export const courseNavigationItems: CourseNavigationItemProps[] = [
  {
    text: "Home",
    route: "Home",
    isActive: false,
  },
  {
    text: "Modules",
    route: "Modules",
    isActive: false,
  },
  {
    text: "Piazza",
    route: "Piazza",
    isActive: false,
  },
  {
    text: "Zoom Meetings",
    route: "ZoomMeetings",
    isActive: false,
  },
  {
    text: "Assignments",
    route: "Assignments",
    isActive: false,
  },
  {
    text: "Quizzes",
    route: "Quizzes",
    isActive: false,
  },
  {
    text: "Grades",
    route: "Grades",
    isActive: false,
  },
  {
    text: "People",
    route: "People",
    isActive: false,
  },
];

export function CourseNavigation() {
  const { pathname } = useLocation();

  return (
    <div className="">
      {courseNavigationItems.map((item) => (
        <CourseNavigationItem
          key={item.text}
          text={item.text}
          route={item.route}
          isActive={pathname.includes(item.route)}
        />
      ))}
    </div>
  );
}

function CourseNavigationItem({
  text,
  route,
  isActive,
}: CourseNavigationItemProps) {
  return (
    <Link to={route} className="text-decoration-none">
      <div
        className={`py-2 px-1 wd-course-navigation-item ${
          isActive ? "wd-course-navigation-item-selected" : ""
        }`}
      >
        {text}
      </div>
    </Link>
  );
}

interface CourseNavigationItemProps {
  text: string;
  route: string;
  isActive: boolean;
}
