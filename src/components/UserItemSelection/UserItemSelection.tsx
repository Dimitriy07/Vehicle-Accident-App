import styles from "./UserItemSelection.module.css";

interface UserItemSelectionProps<T> {
  children: string;
  onSetFn: (id: number) => void;
  arr: T[];
  itemId: number | null;
}

function UserItemSelection<
  T extends { id: number; driverName?: string; vehRegN?: string }
>({
  children,
  onSetFn,
  arr,
  itemId,
}: UserItemSelectionProps<T>): JSX.Element | null {
  if (!arr) return null;

  return (
    <div className={styles.inputSelect}>
      <label className="dropdown-element">{children}</label>
      <select
        onChange={(e) => onSetFn(Number(e.target.value))}
        className="dropdown-element"
        defaultValue=""
      >
        {!itemId && (
          <option value="" disabled hidden>
            {`Choose ${children.toLowerCase()}`}
          </option>
        )}
        {arr.map((item) => (
          <option key={item.id} value={item.id}>
            {item.driverName || item.vehRegN || "Unnamed Item"}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserItemSelection;
