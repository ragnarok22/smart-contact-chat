import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { NotFound } from "./NotFound";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)