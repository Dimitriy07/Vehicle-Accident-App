import { Link } from "react-router-dom";

import { useVehicle } from "../../context/VehicleContext";
import { useDriver } from "../../context/DriverContext";

import UserItemSelection from "../../components/UserItemSelection/UserItemSelection";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";

import { VehicleType } from "../../types/vehicle/VehicleType";
import { DriverType } from "../../types";

import styles from "./MainScreen.module.css";
import { useGeolocation } from "../../context/GeolocationContext";

function MainScreen() {
  const {
    selectItem: selectDriverId,
    items: drivers,
    selectedItemId: driverId,
  } = useDriver();
  const {
    selectItem: selectVehId,
    items: vehicles,
    selectedItemId: vehId,
  } = useVehicle();

  const { getPosition, getTimeDate } = useGeolocation();

  if (!vehicles && !drivers) return;
  return (
    <div className={styles.containerStart}>
      <UserItemSelection<DriverType>
        arr={drivers}
        onSetFn={selectDriverId}
        itemId={driverId}
      >
        Driver:
      </UserItemSelection>
      <UserItemSelection<VehicleType>
        arr={vehicles}
        onSetFn={selectVehId}
        itemId={vehId}
      >
        Vehicles:
      </UserItemSelection>

      {/* Choose driver and vehicle befor start accident steps */}

      <Link
        to="steps-nav"
        className="link-cta start"
        onClick={() => {
          getPosition();
          getTimeDate();
        }}
      >
        Start Accident Form
      </Link>

      <ButtonContainer />
    </div>
  );
}

export default MainScreen;
