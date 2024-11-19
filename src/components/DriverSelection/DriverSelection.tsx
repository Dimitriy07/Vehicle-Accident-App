import styles from "./DriverSelection.module.css";
import { DriverType } from "../../types/driverType";

interface DriverSelectionChildren {
  children: string;
  drivers: DriverType[] | null;
  onSetDriver: (driverName: number) => void;
}

function DriverSelection({
  children,
  drivers,
  onSetDriver,
}: DriverSelectionChildren): JSX.Element | null {
  if (drivers === null) return null;

  return (
    <div className={styles.inputSelectDriver}>
      <label className="dropdown-element">{children}</label>
      <select
        onChange={(e) => onSetDriver(Number(e.target.value))}
        className="dropdown-element"
      >
        {drivers.map((user) => (
          <option key={user.id} value={user.id}>
            {user.driverName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DriverSelection;
