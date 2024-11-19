import { useState } from "react";

import Button from "../../components/Button/Button";
import { NavigationHandlers, handleBack } from "../../utils/navigationSteps";

interface TpDetailsFormProps {
  navObj: NavigationHandlers;
}

function TpDetailsForm({ navObj }: TpDetailsFormProps) {
  // State variables for form fields
  const [isVehInvolved, setIsVehInvolved] = useState("yes");
  const [isDriverOwner, setIsDriverOwner] = useState("yes");

  const [regNumber, setRegNumber] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const [ownerName, setOwnerName] = useState("");
  const [ownerTelephone, setOwnerTelephone] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");

  const [driverName, setDriverName] = useState("");
  const [driverTelephone, setDriverTelephone] = useState("");
  const [driverAddress, setDriverAddress] = useState("");

  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [policyNo, setPolicyNo] = useState("");

  return (
    <div className="interface-screen">
      <form className="details-form navigation-elements">
        <label>Is vehicle involved</label>
        <select
          value={isVehInvolved}
          onChange={(e) => setIsVehInvolved(e.target.value)}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        {isVehInvolved === "yes" && (
          <div className="details-form__input">
            <input
              type="text"
              placeholder="Reg N"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
            <input
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />

            <label>Is Driver owner of the vehicle</label>
            <select
              value={isDriverOwner}
              onChange={(e) => setIsDriverOwner(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            {isDriverOwner !== "yes" && (
              <div>
                <input
                  type="text"
                  placeholder="Owner's Name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Owner's Telephone"
                  value={ownerTelephone}
                  onChange={(e) => setOwnerTelephone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Owner's Address"
                  value={ownerAddress}
                  onChange={(e) => setOwnerAddress(e.target.value)}
                />
              </div>
            )}

            <input
              type="text"
              placeholder="Driver's Name"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Driver's Telephone"
              value={driverTelephone}
              onChange={(e) => setDriverTelephone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Driver's Address"
              value={driverAddress}
              onChange={(e) => setDriverAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Insurance Company"
              value={insuranceCompany}
              onChange={(e) => setInsuranceCompany(e.target.value)}
            />
            <input
              type="text"
              placeholder="Policy No"
              value={policyNo}
              onChange={(e) => setPolicyNo(e.target.value)}
            />
          </div>
        )}
      </form>
      <div className="btn-container">
        <Button onClick={() => handleBack(navObj)}>Back</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default TpDetailsForm;
