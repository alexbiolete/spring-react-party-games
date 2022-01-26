import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { dbApiUrl } from './app/config';
import Guest from "./layouts/Guest";
import Auth from "./layouts/Auth";
import Home from "./views/Home";
import Rooms from "./views/Rooms";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import DashboardAdmin from './views/DashboardAdmin';
import DashboardPlayer from './views/DashboardPlayer';
import Development from './views/Development';

const App = () => {
  const [authenticatedUserId, setAuthenticatedUserId] = useState('0');
  const [authenticatedUserName, setAuthenticatedUserName] = useState('Account');
  const [authenticatedUserUsername, setAuthenticatedUserUsername] = useState('account');
  const [authenticatedUserEmail, setAuthenticatedUserEmail] = useState('account@localhost');
  const [authenticatedUserRole, setAuthenticatedUserRole] = useState('player');

  const [users, setUsers] = useState([]);

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <BrowserRouter>
      {/* {!localStorage.getItem('user_username') ? (
        <Switch>
          <Route path="/" exact>
            <Guest>
              <Login
                setAuthenticatedUserName={setAuthenticatedUserName}
                refreshPage={refreshPage}
              />
            </Guest>
          </Route>
          <Route path="/login" exact>
            <Guest>
              <Login
                setAuthenticatedUserName={setAuthenticatedUserName}
                refreshPage={refreshPage}
              />
            </Guest>
          </Route>
          <Route path="/signup" exact>
            <Guest>
              <Signup refreshPage={refreshPage} />
            </Guest>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      ) : ( */}
        <Switch>
          <Route path="/" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Home
              />
            </Auth>
          </Route>
          <Route path="/rooms" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Rooms />
            </Auth>
          </Route>
          <Route path="/dashboard" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              {authenticatedUserRole === "admin" && <DashboardAdmin />}
              {authenticatedUserRole === "player" && <DashboardPlayer />}
            </Auth>
          </Route>
          <Route path="/dev" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Development />
            </Auth>
          </Route>
          <Route path="*" exact>
            <Guest>
              <NotFound />
            </Guest>
          </Route>
        </Switch>
      {/* )}; */}
    </BrowserRouter>
  );
};

export default App;
