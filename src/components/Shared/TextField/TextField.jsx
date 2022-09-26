// import PropTypes from 'prop-types';
import s from './TextField.module.scss';

// import { Controller } from 'react-hook-form';

const TextField = ({
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
    <label className={s.label}>
      <input
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        // placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
      />
      <span className={s.span}>{placeholder}</span>
    </label>
  );
};
export default TextField;

TextField.defaultProps = {
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
