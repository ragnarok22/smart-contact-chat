import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Chat } from "./Chat";
import Login from "./Login";
import { NotFound } from "./NotFound";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/chat" component={Chat} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)