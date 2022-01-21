import { Link } from 'react-router-dom';

const DebugMenu = ({
  userTypes,
  userType,
  setUserType
}) => {
  return (
    <div className="bg-gray-800 px-4 py-3 rounded-lg shadow-sm space-y-2">
      <div className="flex space-x-1">
        <span className="bg-red-800 px-2 py-1 rounded-md uppercase font-medium tracking-wider text-xs text-gray-200">
          {'Debug menu'}
        </span>
        <Link to="/dev" className="-mt-0.5">
          <span className="border border-blue-300 px-2 py-1 rounded-md uppercase font-medium tracking-wider text-xs text-blue-100 transition ease-in-out duration-500 hover:text-blue-500 hover:border-blue-500">
            {'Dev URLs'}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DebugMenu;
