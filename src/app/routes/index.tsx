import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" Component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
};
