import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Guest from "./layouts/Guest";
import Auth from "./layouts/Auth";
import Home from "./views/Home";
import Rooms from "./views/Rooms";
import Room from './views/Room';
import NotFound from "./views/NotFound";
import Register from './views/Register';
import Login from "./views/Login";
import Dashboard from './views/Dashboard';

const App = () => {
  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <BrowserRouter>
      {!sessionStorage.getItem('user_username') ? (
        <Switch>
          <Route path="/" exact>
            <Guest>
              <Login refreshPage={refreshPage} />
            </Guest>
          </Route>
          <Route path="/register" exact>
            <Guest>
              <Register refreshPage={refreshPage} />
            </Guest>
          </Route>
          <Route path="/login" exact>
            <Guest>
              <Login refreshPage={refreshPage} />
            </Guest>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <Auth refreshPage={refreshPage}>
              <Home />
            </Auth>
          </Route>
          <Route path="/home" exact>
            <Auth refreshPage={refreshPage}>
              <Home />
            </Auth>
          </Route>
          <Route path="/rooms" exact>
            <Auth refreshPage={refreshPage}>
              <Rooms />
            </Auth>
          </Route>
          <Route path="/room/:id" exact>
            <Auth refreshPage={refreshPage}>
              <Room refreshPage={refreshPage} />
            </Auth>
          </Route>
          <Route path="/dashboard" exact>
            <Auth refreshPage={refreshPage}>
              <Dashboard />
            </Auth>
          </Route>
          <Route path="*" exact>
            <Guest>
              <NotFound />
            </Guest>
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
