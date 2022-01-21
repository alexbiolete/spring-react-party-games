import { Link, useLocation } from 'react-router-dom';

const NavbarTabLink = ({ label, icon, path }) => {
  let location = useLocation();

  return (
    <Link to={path} className="flex-1">
      <p className={`flex flex-col items-center space-y-1 tracking-tighter
        ${"/".concat(location.pathname.split('/')[1]) !== path ?
          'text-gray-400 hover:text-gray-200 transition ease-in-out duration-300'
        :
          'text-white'
        }
        px-2 py-2 rounded-xl
      `}>
        <span className="relative">
          {icon}
        </span>
        <span className="font-medium tracking-wide uppercase text-xs">
          {label}
        </span>
      </p>
    </Link>
  );
};

export default NavbarTabLink;
