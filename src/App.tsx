import { useEffect, useState } from "react";

// import Header from "./components/Header/Header";
import DriverSelection from "./components/DriverSelection/DriverSelection";
// import NavigationEl from "./components/Navigation/Navigation";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";

import styles from "./App.module.css";

import { DriverType } from "./types/driverType";
import { Link } from "react-router-dom";
// import driverData from "./data/driver_data.json";

const fakeUsersArr: { drivers: DriverType[] } = {
  drivers: [
    {
      id: 1,
      driverName: "Asdf Asdf",
      driverDOB: "01/01/1988",
      driverPhoneN: "07546545464",
      driverFullLicenseDate: "01/01/2010",
      driverAddress: "1 Westminster Street, Imagetown, TY3 4IO",
    },
    {
      id: 2,
      driverName: "Gfdas Gfdsvz",
      driverDOB: "01/01/1900",
      driverPhoneN: "07555555555",
      driverFullLicenseDate: "21/21/2000",
      driverAddress: "5 London Bridge Street, Unkntown, QW2 3RT",
    },
  ],
};

function App() {
  const [drivers, setDrivers] = useState<DriverType[] | null>(null);
  const [driver, setDriver] = useState<DriverType | undefined>(undefined);

  useEffect(function () {
    setDrivers(fakeUsersArr.drivers);
  }, []);

  function handleSetDriver(id: number): void {
    if (drivers === null) return;
    const driver = [...drivers]?.find((driv) => {
      return driv.id === id;
    });
    setDriver((driver) => driver);
    console.log(driver);
  }

  return (
    <div className={styles.containerStart}>
      {/* <Header /> */}

      <DriverSelection drivers={drivers} onSetDriver={handleSetDriver}>
        Driver:
      </DriverSelection>
      <Link to="steps">Steps</Link>
      {/* 
      <NavigationEl
        onClick={() => handleDriverConfirm()}
        bgColor="#BD2F44"
        color="#fff"
      >
        Start Accident Form
      </NavigationEl> */}

      <ButtonContainer />
    </div>
  );
}

export default App;
