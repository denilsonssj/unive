import {  Switch, Route, Redirect } from "react-router-dom";

import { NotFoundPage } from "./pages/NotFound";

export function App() {
  return (
      <Switch>
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect exact from="/**" to="/not-found" />
<<<<<<< HEAD
        <Redirect exact from="/**" to="/not-found-b2" />
      </Switch>
  );
}
