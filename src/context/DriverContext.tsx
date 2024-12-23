import { DriverType } from "../types/drivers/DriverType";
import { createItemSelectionContext } from "./ItemSelectionContext";

const fakeDriversArr: DriverType[] = [
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
];

const { ItemSelectionProvider: DriverProvider, useItemSelection: useDriver } =
  createItemSelectionContext<DriverType>(fakeDriversArr);

export { DriverProvider, useDriver };
