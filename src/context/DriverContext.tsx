/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";
import { DriverType } from "../types/DriverType";

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

interface DriverContextValue {
  driver: DriverType | undefined;
  drivers: DriverType[] | null;
  onSetDriver: (id: number) => void;
}
const DriverContext = createContext<DriverContextValue | null>(null);

function DriverProvider({ children }: { children: React.ReactNode }) {
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
    setDriver(driver);
    console.log(driver);
  }

  return (
    <DriverContext.Provider
      value={
        {
          driver,
          drivers,
          onSetDriver: handleSetDriver,
        } as DriverContextValue
      }
    >
      {children}
    </DriverContext.Provider>
  );
}

function useDriver() {
  const context = useContext(DriverContext);
  if (context === undefined || context === null)
    throw new Error("Use context inside DriverContext");
  return context;
}

export { DriverProvider, useDriver };
