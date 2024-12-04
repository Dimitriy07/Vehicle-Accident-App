/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./DriverSelection.module.css";

import { useDriver } from "../../context/DriverContext";
import { DriverType } from "../../types/DriverType";

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
        defaultValue=""
      >
        <option value="" disabled hidden>
          Choose Driver
        </option>
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
