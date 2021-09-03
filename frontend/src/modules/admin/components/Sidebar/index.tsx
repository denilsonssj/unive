import { RouteProps, useHistory } from "react-router-dom";

import { SidebarContent, SidebarHeader, SidebarHeaderIcon, SidebarHeaderLogo, SidebarBody, Span, List, ListItem, Image, Link } from "./styles";
import dashboardIcon from "assets/icons/dashboard.svg";
import coursesIcon from "assets/icons/courses.svg";
import materialsIcon from "assets/icons/materials.svg";
import calendarIcon from "assets/icons/calendar.svg";
import transcriptsIcon from "assets/icons/transcripts.svg";
import gradesIcon from "assets/icons/grades.svg";
import attendancesIcon from "assets/icons/attendances.svg";
import settingsIcon from "assets/icons/settings.svg";
import logoIcon from "assets/icons/icon.svg";

interface IRouteProps extends RouteProps {
  path: string;
  label: string;
  source: string;
};

interface ISidebarProps {
  isSidebarOpen: boolean;
};

export function Sidebar({ isSidebarOpen }: ISidebarProps) {
  const location = "dashboard";
  const history = useHistory();
  const paths: IRouteProps[] = [
    {
      path: `/${location}`,
      label: "Dashboard",
      source: dashboardIcon
    },
    {
      path: `/${location}/courses`,
      label: "Courses",
      source: coursesIcon
    },
    {
      path: `/${location}/materials`,
      label: "Materials",
      source: materialsIcon
    },
    {
      path: `/${location}/calendar`,
      label: "Calendar",
      source: calendarIcon
    },
    {
      path: `/${location}/transcripts`,
      label: "Transcripts",
      source: transcriptsIcon
    },
    {
      path: `/${location}/grades`,
      label: "Grades",
      source: gradesIcon
    },
    {
      path: `/${location}/attendances`,
      label: "Attendances",
      source: attendancesIcon
    },
    {
      path: `/${location}/settings`,
      label: "Settings",
      source: settingsIcon
    }
  ];

  function handleClickOnLogo() {
    history.push(`/${location}`);
  }

  return (
    <SidebarContent isOpen={isSidebarOpen}>
      <SidebarHeader>
        <SidebarHeaderLogo onClick={handleClickOnLogo}>
          <SidebarHeaderIcon src={logoIcon} alt="" height="48" width="40" />
          <Span>nive</Span>
        </SidebarHeaderLogo>
      </SidebarHeader>
      <SidebarBody>
        <List>
          {
            paths.map(path => (
              <ListItem key={path.label}>
                <Image 
                  src={path.source} 
                  alt="" 
                  width="40" 
                  height="48" 
                />
                <Link to={path.path}>{path.label}</Link>
              </ListItem>
            ))
          }
        </List>
      </SidebarBody>
    </SidebarContent>
  );
}
