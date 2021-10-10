import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Chat } from "./components/Chat";
import Login from "./components/Login";
import { NotFound } from "./components/NotFound";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/chat" component={Chat} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)