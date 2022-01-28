import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { dbApiUrl } from "../app/config";
import WrapperForm from '../components/molecules/WrapperForm';
import WrapperInput from '../components/molecules/WrapperInput';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import LinkOutlineSecondary from '../components/atoms/LinkOutlineSecondary';

const Register = ({ refreshPage }) => {
  const DEFAULT_USER_TYPE = "user";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userType = DEFAULT_USER_TYPE;

  const history = useHistory();

  const handleRegister = (e) => {
    const user = {
      username: username,
      mail: email,
      password: password,
      type: userType,
    };

    axios.post(`${dbApiUrl}/user`, user).then((response) => console.log(response));
    history.push("/");
    refreshPage();
  };

  return (
    <WrapperForm>
      <form>
        <div className="w-full px-4 py-5 bg-gray-800 sm:p-6">
          <div className="flex flex-col items-center space-y-4">
            <WrapperInput
              id="email"
              title="E-mail"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
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
              <LinkOutlineSecondary to='/login' title="Log in" />
              <ButtonPrimary
                title="Register"
                type="submit"
                onClick={(e) => handleRegister(e)}
              />
            </div>
          </div>
        </div>
      </form>
    </WrapperForm>
  );
};

export default Register;
