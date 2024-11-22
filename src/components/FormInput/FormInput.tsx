import styles from "./FormInput.module.css";

interface FormInputProps {
  type: string;
  value: string;
  onChangeSet?: (e: string) => void;
  placeholder?: string;
  label?: string;
  options?: string[];
  inputName?: string;
}

function FormInput({
  type,
  value,
  onChangeSet,
  placeholder,
  label,
  options,
  inputName,
}: FormInputProps) {
  if (type === "select") {
    return (
      <>
        <label className={styles.label}>{label}</label>
        <select
          className={styles.select}
          value={value}
          onChange={(e) => onChangeSet && onChangeSet(e.target.value)}
          name={inputName}
        >
          {options?.map((option) => (
            <option className={styles.option} key={option} value={option}>
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
        name={inputName}
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeSet && onChangeSet(e.target.value)}
      />
    );
  }
  if (type === "hidden") {
    return <input name={inputName} type="hidden" value={value} />;
  }
  return null;
}

export default FormInput;
