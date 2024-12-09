import { createItemSelectionContext } from "./ItemSelectionContext";
import { VehicleType } from "../types/vehicle/VehicleType";

const fakeVehiclesArr: VehicleType[] = [
  {
    id: 1,
    vehRegN: "AB12CDE",
    vehMake: "Mercedes Benz",
    vehModel: "Sprinter",
    isVehHired: "Company Owned",
  },
  {
    id: 2,
    vehRegN: "FG34HIG",
    vehMake: "DAF",
    vehModel: "LF202",
    isVehHired: "Leased",
    vehHiredCompany: "Alltruck",
  },
];

const { ItemSelectionProvider: VehicleProvider, useItemSelection: useVehicle } =
  createItemSelectionContext<VehicleType>(fakeVehiclesArr);

export { VehicleProvider, useVehicle };
