import s from './TextFieldDefault.module.scss';
const TextFieldDefault = ({
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
export default TextFieldDefault;

TextFieldDefault.defaultProps = {
  type: 'text',
  required: false,
};
