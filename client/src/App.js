import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { dbApiUrl } from './app/config';
import Guest from "./layouts/Guest";
import Auth from "./layouts/Auth";
import Home from "./views/Home";
import Rooms from "./views/Rooms";
import Room from './views/Room';
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import GuestAcc from "./views/Guest";
import Dashboard from './views/Dashboard';
import CreateRoom from './views/CreateRoom';

const App = () => {
  const [authenticatedUserId, setAuthenticatedUserId] = useState('');
  const [authenticatedUserName, setAuthenticatedUserName] = useState('');
  const [authenticatedUserUsername, setAuthenticatedUserUsername] = useState('');
  const [authenticatedUserEmail, setAuthenticatedUserEmail] = useState('');
  const [authenticatedUserRole, setAuthenticatedUserRole] = useState('');

  const [users, setUsers] = useState([]);

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <BrowserRouter>
      {!localStorage.getItem('user_username') ? (
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
          <Route path="/guest" exact>
            <Guest>
              <GuestAcc />
            </Guest>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      ) : (
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
          <Route path="/room/:id" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Room />
            </Auth>
          </Route>
          <Route path="/dashboard" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Dashboard />
            </Auth>
          </Route>
          <Route path="*" exact>
            <Guest>
              <NotFound />
            </Guest>
          </Route>
        </Switch>
      )};
    </BrowserRouter>
  );
};

export default App;
