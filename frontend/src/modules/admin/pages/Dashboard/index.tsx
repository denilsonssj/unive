import { useState } from "react";
import { Switch, Route, RouteProps, Redirect } from "react-router-dom";

import { Footer } from "modules/admin/components/Footer";
import { Header } from "modules/admin/components/Header";
import { Sidebar } from "modules/admin/components/Sidebar";

import { Container, Column, Main } from "./styles";

import { IndexPage } from "../Index";
import { CoursesPage } from "../Courses";
import { MaterialsPage } from "../Materials";

interface IRouteProps extends RouteProps {
  path: string;
};

export function DashboardPage() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = "dashboard";
  const paths: IRouteProps[] = [
    {
      path: `/dashboard/courses`,
      component: CoursesPage
    },
    {
      path: `/${location}/materials`,
      component: MaterialsPage
    },
    {
      path: `/${location}/calendar`,
      component: MaterialsPage
    },
    {
      path: `/${location}/transcripts`,
      component: MaterialsPage
    },
    {
      path: `/${location}`,
      exact: true,
      component: IndexPage
    },
  ];
  
  function handleClickButtonMenu() {
    setIsSidebarOpen(value => !value);
  }

  return (
    <Container>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Column>
        <Header handleClickButtonMenu={handleClickButtonMenu}/>
        <Main>
          <Switch>
            {
              paths.map(({ path, component, ...rest }) => (
                <Route
                  key={path}
                  path={path}
                  component={component} 
                  { ...rest }
                />
              ))
            }
            <Redirect from="/dashboard/**/" to="/not-found" />
          </Switch>
        </Main>
        <Footer />
      </Column>
    </Container>
  );
}