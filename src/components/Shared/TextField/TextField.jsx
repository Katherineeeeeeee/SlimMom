import s from './TextField.module.scss';

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
