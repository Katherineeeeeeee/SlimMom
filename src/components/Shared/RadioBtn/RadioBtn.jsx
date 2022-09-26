// import PropTypes from ‘prop-types’;
import s from './RadioBtn.module.scss';

const RadioBtn = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  required,
  pattern,
  title,
}) => {
  return (
    <label>
      <input
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
      />
    </label>
  );
};
export default RadioBtn;

RadioBtn.defaultProps = {
  type: 'text',
  required: false,
};

// TextField.propTypes = {
//   value: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   type: PropTypes.string,
//   className: PropTypes.string,
//   placeholder: PropTypes.string,
//   required: PropTypes.bool,
// };
