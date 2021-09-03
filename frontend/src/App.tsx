import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { DashboardPage } from "modules/admin/pages/Dashboard";
import { App } from "modules/app/App";

function Application() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

export default Application;
