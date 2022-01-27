import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import WrapperForm from '../components/molecules/WrapperForm';
import WrapperInput from '../components/molecules/WrapperInput';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import LinkOutlineSecondary from '../components/atoms/LinkOutlineSecondary';

const Login = ({ setAuthenticatedUserName, refreshPage }) => {
  const [currentTab, setCurrentTab] = useState('user');

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleUserLogin = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    axios.post("http://localhost:8081/user/login", user)
      .then((response) => {
        if (response.data.username == "" && response.data.password == "") {
          history.push("/login");
          refreshPage();
        }

        sessionStorage.setItem('user_id', response.data.id);
        sessionStorage.setItem('user_username', response.data.username);
        sessionStorage.setItem('user_email', response.data.mail);
        sessionStorage.setItem('user_type', response.data.type);
        history.push("/rooms");

        history.push("/");
        refreshPage();
      })
      .catch((response) => {
        history.push("/");
        refreshPage();
      });
  };

  const handleGuestLogin = (e) => {
    var verify = true;

    const user = {
      username: username,
      type: "guest",
    };

    if (username == '') {
      verify = false;
    }

    if (password == '') {
      verify = false;
    }

    axios.post("http://localhost:8081/user", user)
      .then((response) => {
        if (response.data.username == "" && response.data.password == "") {
          history.push("/login");
          refreshPage();
        }

        sessionStorage.setItem('user_id', response.data.id);
        sessionStorage.setItem('user_username', response.data.username);
        sessionStorage.setItem('user_type', response.data.type);

        history.push("/");
        refreshPage();
      })
      .catch((response) => {
        history.push("/login");
        refreshPage();
      });
  };

  return (
    <WrapperForm>
      <div className="w-full p-6 bg-gray-800">
        <div className="w-full h-8 flex items-center justify-between space-x-2">
          <button type="button" className={`flex-1 flex items-center justify-center space-x-0.5 px-3 py-1.5 bg-gray-900 border-2 ${currentTab === 'user' ? 'border-gray-700' : 'border-transparent'} transition ease-in-out duration-500 rounded-lg font-medium tracking-wider uppercase text-center text-gray-300 text-xs`} onClick={() => setCurrentTab('user')}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
              </svg>
            </span>
            <span>
              {'User'}
            </span>
          </button>
          <button type="button" className={`flex-1 flex items-center justify-center space-x-0.5 px-3 py-1.5 bg-gray-900 border-2 ${currentTab === 'guest' ? 'border-gray-700' : 'border-transparent'} transition ease-in-out duration-500 rounded-lg font-medium tracking-wider uppercase text-center text-gray-300 text-xs`} onClick={() => setCurrentTab('guest')}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </span>
            <span>
              {'Guest'}
            </span>
          </button>
        </div>
        {currentTab === 'user' && (
          <form>
            <div className="flex flex-col items-center space-y-4">
              <WrapperInput
                id="username"
                title="Username"
                type="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <WrapperInput
                id="password"
                title="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <div className="w-full flex space-x-2">
                <LinkOutlineSecondary to='/register' title="Register" />
                <ButtonPrimary title="Log in" type="submit" onClick={(e) => handleUserLogin(e)} />
              </div>
            </div>
          </form>
        )}
        {currentTab === 'guest' && (
          <form>
            <div className="flex flex-col items-center space-y-4">
              <WrapperInput
                id="username"
                title="Username"
                type="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <div className="w-full flex space-x-2">
                <div className="flex-1"></div>
                <ButtonPrimary
                  title="Log in"
                  type="submit"
                  onClick={(e) => handleGuestLogin(e)}
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </WrapperForm>
  );
};

export default Login;
