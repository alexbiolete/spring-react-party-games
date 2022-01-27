import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import WrapperForm from '../components/molecules/WrapperForm';
import WrapperInput from '../components/molecules/WrapperInput';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import LinkOutlineSecondary from '../components/atoms/LinkOutlineSecondary';

export default function Signup({ refreshPage }) {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type1, setType1] = useState("registered");

  const history = useHistory();


  const handleSubmit = (e) => {
    var verify = true;
    const user = {
      "mail": mail,
      "username": username,
      "password": password,
      "type": type1,
    };

    if (mail == '') {
      verify = false;
    }

    if (username == '') {
      verify = false;
    }

    if (password == '') {
      verify = false;
    }

    axios.post("http://localhost:8081/user", user).then((response) => console.log(response));
    history.push("/login");

  };

  const handleSubmit2 = (e) => {
    history.push("/guest")
  };

  return (
    <WrapperForm>
      <form>
        <div className="w-full px-4 py-5 bg-white sm:p-6">
          <div className="flex flex-col items-center space-y-4">
            <WrapperInput
              id="mail"
              title="E-mail"
              type="mail"
              onChange={(e) => setMail(e.target.value)}
              value={mail}
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
          </div>
        </div>
        <div>
          <ButtonPrimary title="Guest account" type="submit" href="/guest" onClick={(e) => handleSubmit2(e)} />
        </div>
        <div className="flex items-center justify-end space-x-3 p-3 bg-gray-50 text-right">
          <LinkOutlineSecondary to='/login' title="Log in" />
          <ButtonPrimary title="Sign up" type="submit" href="/login" onClick={(e) => handleSubmit(e)} />
        </div>
      </form>
    </WrapperForm>
  );
}
