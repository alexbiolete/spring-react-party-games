import PropTypes from 'prop-types';

const Label = ({ id, title }) => {
  return (
    <label
      htmlFor={id}
      className="px-0.5 select-none font-medium tracking-wider text-sm"
    >
      {title}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};

export default Label;
