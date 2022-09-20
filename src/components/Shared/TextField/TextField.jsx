// import PropTypes from 'prop-types';
import s from './TextField.module.scss';

const TextField = ({ type, name, value, onChange, placeholder, required }) => {
  return (
    <label>
      <input
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
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
