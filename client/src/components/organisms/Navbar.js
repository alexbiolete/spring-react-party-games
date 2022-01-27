import { useState } from 'react';
import NavbarTabs from '../molecules/NavbarTabs';
import DropdownNavbarUser from '../molecules/DropdownNavbarUser';

const Navbar = ({
  setAuthenticatedUserName,
  refreshPage,
  createRoom
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <nav className="z-50 fixed top-0 bg-gray-900 w-full h-16 border-b-2 border-gray-800 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex">
          <div className="flex-1 inline-flex items-center justify-begin">
            <div className="flex-1 inline-flex md:hidden items-center justify-begin">
            </div>
            <div className="flex-1 flex items-center">
              <h1 className="mx-auto md:mx-0 text-2xl uppercase font-light tracking-widest truncate">
                {'Party Games'}
              </h1>
            </div>
            <div className="flex-1 hidden md:flex justify-between md:justify-evenly space-x-2 md:space-x-6">
              <NavbarTabs />
            </div>
            <div className="flex-1 inline-flex items-center justify-end">
              <div className="relative">
                <button
                  className="flex items-center space-x-0.5 focus:outline-none text-gray-300 md:hover:text-red-500 md:transition ease-in-out duration-500"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <span className="bg-transparent rounded-full overflow-hidden">
                    {/* ../Resources/svg/user.svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="hidden md:block font-medium tracking-wider text-xs uppercase">
                    {sessionStorage.getItem('user_username').length > 15 ? sessionStorage.getItem('user_username').substr(0, 14) + '...' : sessionStorage.getItem('user_username')}
                  </span>
                </button>
                <DropdownNavbarUser
                  showUserMenu={showUserMenu}
                  setAuthenticatedUserName={setAuthenticatedUserName}
                  refreshPage={refreshPage}
                  // createRoom={createRoom}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="z-50 flex md:hidden items-center justify-between space-x-2 md:space-x-6 fixed bottom-0 bg-gray-900 w-full h-16 border-t-2 border-gray-800">
        <NavbarTabs />
      </nav>
    </>
  );
};

export default Navbar;
