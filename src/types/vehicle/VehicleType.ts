export interface VehicleType {
  vehRegN: string;
  vehMake: string;
  vehModel: string;
  isVehHired: "Company Owned" | "Leased" | "Hired";
  vehHiredCompany?: string;
  id: number;
}
