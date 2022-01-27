import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import WrapperForm from '../components/molecules/WrapperForm';
import WrapperInput from '../components/molecules/WrapperInput';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import LinkOutlineSecondary from '../components/atoms/LinkOutlineSecondary';

const Register = ({ refreshPage }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("registered");

  const history = useHistory();

  const handleRegister = (e) => {
    var verify = true;
    const user = {
      username: username,
      mail: email,
      password: password,
      type: userType,
    };

    if (username == '') {
      verify = false;
    }

    if (email == '') {
      verify = false;
    }

    if (password == '') {
      verify = false;
    }

    axios.post("http://localhost:8081/user", user).then((response) => console.log(response));
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
