import PropTypes from 'prop-types';

const ButtonPrimary = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      className="flex-1 w-full px-2 py-1.5 bg-gray-700 border-2 border-transparent hover:border-gray-400 rounded-lg text-gray-100 hover:text-gray-200 focus:outline-none transition ease-in-out duration-300"
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

ButtonPrimary.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default ButtonPrimary;
