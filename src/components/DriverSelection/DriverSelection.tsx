import styles from "./DriverSelection.module.css";

import { useDriver } from "../../context/DriverContext";
import { DriverType } from "../../types/driverType";

interface DriverSelectionChildren {
  children: string;
}

function DriverSelection({
  children,
}: DriverSelectionChildren): JSX.Element | null {
  const { drivers, onSetDriver } = useDriver();
  if (!drivers) return null;
  return (
    <div className={styles.inputSelectDriver}>
      <label className="dropdown-element">{children}</label>
      <select
        onChange={(e) => onSetDriver(Number(e.target.value))}
        className="dropdown-element"
      >
        {drivers.map((user: DriverType) => (
          <option key={user.id} value={user.id}>
            {user.driverName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DriverSelection;
