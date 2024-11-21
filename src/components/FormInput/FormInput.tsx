interface FormInputProps {
  type: string;
  value: string;
  onChangeSet: (e: string) => void;
  placeholder?: string;
  label?: string;
  options?: string[];
}

function FormInput({
  type,
  value,
  onChangeSet,
  placeholder,
  label,
  options,
}: FormInputProps) {
  if (type === "select") {
    return (
      <>
        <label>{label}</label>
        <select value={value} onChange={(e) => onChangeSet(e.target.value)}>
          {options?.map((option) => (
            <option value={option}>
              {option.replace(option[0], option[0].toUpperCase())}
            </option>
          ))}
        </select>
      </>
    );
  }
  if (type === "input-text") {
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeSet(e.target.value)}
      />
    );
  }
}

export default FormInput;
