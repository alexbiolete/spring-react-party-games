import PropTypes from 'prop-types';

const ButtonSimpleSecondary = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      type={type}
      className="w-full px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-300 focus:outline-none transition ease-in-out duration-300"
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        {children}
        <span className="uppercase font-medium tracking-wider text-xs whitespace-nowrap">
          {title}
        </span>
      </div>
    </button>
  );
};

ButtonSimpleSecondary.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default ButtonSimpleSecondary;
