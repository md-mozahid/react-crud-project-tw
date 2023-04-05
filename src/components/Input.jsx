export default function Input({
  type,
  id,
  name,
  error,
  register,
  defaultValue,
  value,
  placeholder,
  errors,
  ...rest
}) {
  return (
    <input
      className="inputVal"
      name={name}
      type={type === 'password' ? 'password' : 'text'}
      defaultValue={defaultValue}
      {...register(name)}
      errors={errors}
      placeholder={placeholder}
      {...rest}
    />
  )
}
