import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModalCreateRoom from '../organisms/ModalCreateRoom';
import ButtonSimpleSecondary from '../atoms/ButtonSimpleSecondary';
import ButtonSimpleDanger from '../atoms/ButtonSimpleDanger';

const DropdownNavbarUser = ({
  showUserMenu,
  setAuthenticatedUserName,
  refreshPage,
  createRoom
}) => {
  const [showModalCreateRoom, setShowModalCreateRoom] = useState(false);

  const history = useHistory();

  return (
    <div>
      {showUserMenu ? (
        <div className="absolute top-10 right-0 bg-gray-700 rounded-xl overflow-hidden p-1">
          <ButtonSimpleSecondary
            title="Create room"
            onClick={() => setShowModalCreateRoom(!showModalCreateRoom)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </ButtonSimpleSecondary>
          <ButtonSimpleDanger
            title="Log out"
            onClick={() => {
              sessionStorage.removeItem('user_id');
              sessionStorage.removeItem('user_name');
              sessionStorage.removeItem('user_username');
              sessionStorage.removeItem('user_email');

              setAuthenticatedUserName("Account");

              history.push("/");
              refreshPage();
            }}
          >
            {/* ../Resources/svg/logout.svg */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-5 h-5">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </svg>
          </ButtonSimpleDanger>
        </div>
      ) : (
        ''
      )}

      <ModalCreateRoom
        showModalCreateRoom={showModalCreateRoom}
        setShowModalCreateRoom={setShowModalCreateRoom}
        onAdd={createRoom}
      />
    </div>
  );
};

DropdownNavbarUser.propTypes = {
  showUserMenu: PropTypes.bool,
  setAuthenticatedUserName: PropTypes.func
};

export default DropdownNavbarUser;
