import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import WrapperForm from '../components/molecules/WrapperForm';
import WrapperInput from '../components/molecules/WrapperInput';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import LinkOutlineSecondary from '../components/atoms/LinkOutlineSecondary';

export default function GuestAcc({ refreshPage }) {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type1, setType1] = useState("guest");

  const history = useHistory();


  const handleSubmit = (e) => {
    var verify = true;
    const user = {
      "mail": username,
      "username": username,
      "password": username,
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
    history.push("/rooms");

  };


  return (
    <WrapperForm>
      <form>
        <div className="w-full px-4 py-5 bg-white sm:p-6">
          <div className="flex flex-col items-center space-y-4">
            <WrapperInput
              id="username"
              title="Username"
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-3 p-3 bg-gray-50 text-right">
          <ButtonPrimary title="Login" type="submit" onClick={(e) => handleSubmit(e)} />
        </div>
      </form>
    </WrapperForm>
  );
}
