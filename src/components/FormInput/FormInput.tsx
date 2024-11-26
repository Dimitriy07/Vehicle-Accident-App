import styles from "./FormInput.module.css";

interface FormInputProps {
  type: string;
  value: string | Date;
  onChangeSet?: (value: string) => void;
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
  const stringValue = value instanceof Date ? value.toISOString() : value;

  if (type === "select") {
    return (
      <>
        <label className={styles.label}>{label}</label>
        <select
          className={styles.select}
          value={stringValue}
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
        value={stringValue}
        onChange={(e) => onChangeSet && onChangeSet(e.target.value)}
      />
    );
  }
  if (type === "input-date") {
    return (
      <>
        <label className={styles.label}>{label}</label>
        <input
          name={inputName}
          className={styles.input}
          type="date"
          placeholder={placeholder}
          value={stringValue.split("T")[0]}
          onChange={(e) => onChangeSet && onChangeSet(e.target.value)}
        />
      </>
    );
  }
  if (type === "input-time") {
    return (
      <>
        <label className={styles.label}>{label}</label>
        <input
          name={inputName}
          className={styles.input}
          type="time"
          placeholder={placeholder}
          value={stringValue.split("T")[1]}
          onChange={(e) => onChangeSet && onChangeSet(e.target.value)}
        />
      </>
    );
  }
  if (type === "hidden") {
    return <input name={inputName} type="hidden" value={stringValue} />;
  }
  return null;
}

export default FormInput;
