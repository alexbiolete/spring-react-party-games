import PropTypes from 'prop-types';

const Guest = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900 text-gray-200">
      <main className="max-w-7xl w-full mt-16 mx-auto">
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
};

Guest.propTypes = {
  children: PropTypes.any,
};

export default Guest;
