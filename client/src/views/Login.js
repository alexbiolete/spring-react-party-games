import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import WrapperForm from '../components/molecules/WrapperForm';
import WrapperInput from '../components/molecules/WrapperInput';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import LinkOutlineSecondary from '../components/atoms/LinkOutlineSecondary';

export default function Login({ refreshPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      "username": username,
      "password": password,
    };
    axios.post("http://localhost:8081/user/login", user)
      .then(response => {
        if (response.data.username == "" && response.data.password == "") {
          history.push("/login");
          refreshPage();
        }

        localStorage.setItem('user_id', response.data.id);
        localStorage.setItem('user_username', response.data.username);
        localStorage.setItem('user_email', response.data.mail);
        localStorage.setItem('user_type', response.data.type);
        history.push("/rooms");

      })
      .catch((response) => {
        history.push("/");
      });
  };

  return (
    <WrapperForm>
      <form>
        <div className="w-full px-4 py-5 bg-gray-800 sm:p-6">
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
          </div>
        </div>
        <div className="flex items-center justify-end space-x-3 p-3 bg-gray-800 text-right">
          <LinkOutlineSecondary to='/signup' title="Sign up" />
          <ButtonPrimary title="Log in" type="submit" onClick={(e) => handleSubmit(e)} />
        </div>
      </form>
    </WrapperForm>
  );
}
