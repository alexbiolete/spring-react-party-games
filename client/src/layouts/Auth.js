import PropTypes from 'prop-types';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

const Auth = ({
  children,
  setAuthenticatedUserName,
  refreshPage,
  createRoom
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900 text-gray-100">
      <Navbar
        setAuthenticatedUserName={setAuthenticatedUserName}
        refreshPage={refreshPage}
        createRoom={createRoom}
      />
      <main className="max-w-7xl w-full mt-16 mb-4 md:mb-0 mx-auto">
        <div className="p-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

Auth.propTypes = {
  children: PropTypes.any,
};

export default Auth;
