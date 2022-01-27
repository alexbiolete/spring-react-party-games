import PropTypes from 'prop-types';

const ButtonSecondary = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      className="flex-1 w-full px-2 py-1.5 border-2 border-gray-500 hover:border-gray-400 rounded-lg text-center text-gray-500 hover:text-gray-400 focus:outline-none transition ease-in-out duration-500"
      type={type}
      onClick={onClick}
    >
      <div className="flex items-center justify-center space-x-0.5">
        {children}
        <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
          {title}
        </span>
      </div>
    </button>
  );
};

ButtonSecondary.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default ButtonSecondary;
