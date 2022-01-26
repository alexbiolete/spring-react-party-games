import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonSimpleDanger from '../atoms/ButtonSimpleDanger';

const DropdownNavbarUser = ({
  showUserMenu,
  setAuthenticatedUserName,
  refreshPage
}) => {
  const history = useHistory();

  return (
    <div>
      {showUserMenu ? (
        <div className="absolute top-10 right-0 bg-gray-700 rounded-xl overflow-hidden p-1">
          <ButtonSimpleDanger
            title="Log out"
            onClick={() => {
              localStorage.removeItem('user_id');
              localStorage.removeItem('user_name');
              localStorage.removeItem('user_username');
              localStorage.removeItem('user_email');

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
    </div>
  );
};

DropdownNavbarUser.propTypes = {
  showUserMenu: PropTypes.bool,
  setAuthenticatedUserName: PropTypes.func
};

export default DropdownNavbarUser;