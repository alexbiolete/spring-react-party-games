import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkOutlineSecondary = ({
  children,
  to,
  title
}) => {
  return (
    <Link
      to={to}
      className="flex-1 w-full px-2 py-1.5 border-2 border-gray-500 hover:border-gray-400 rounded-lg text-center text-gray-500 hover:text-gray-400 focus:outline-none transition ease-in-out duration-500"
    >
      <div className="flex items-center justify-center space-x-0.5">
        {children}
        <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
          {title}
        </span>
      </div>
    </Link>
  );
};

LinkOutlineSecondary.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
  title: PropTypes.string
};

export default LinkOutlineSecondary;
