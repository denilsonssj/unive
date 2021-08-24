import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { DashboardPage } from "modules/admin/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Redirect exact from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
