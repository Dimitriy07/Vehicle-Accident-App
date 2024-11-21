import { useNavigate } from "react-router";

import Button from "../../components/Button/Button";

import { useFormContext } from "../../context/FormContext";
import FormInput from "../../components/FormInput/FormInput";

function TpDetailsForm() {
  const navigate = useNavigate();
  const {
    setTpDetails,
    isVehInvolved,
    isTpDriverOwner,
    tpRegNumber,
    tpMake,
    tpModel,
    tpOwnerName,
    tpOwnerTelephone,
    tpOwnerAddress,
    tpDriverName,
    tpDriverTelephone,
    tpDriverAddress,
    tpInsuranceCompany,
    tpPolicyNo,
    setIsVehInvolved,
    setTpIsDriverOwner,
    setTpRegNumber,
    setTpMake,
    setTpModel,
    setTpOwnerName,
    setTpOwnerTelephone,
    setTpOwnerAddress,
    setTpDriverName,
    setTpDriverTelephone,
    setTpDriverAddress,
    setTpInsuranceCompany,
    setTpPolicyNo,
  } = useFormContext();

  // // State variables for form fields
  // const [isVehInvolved, setIsVehInvolved] = useState("yes");
  // const [isDriverOwner, setIsDriverOwner] = useState("yes");

  // const [regNumber, setRegNumber] = useState("");
  // const [make, setMake] = useState("");
  // const [model, setModel] = useState("");

  // const [ownerName, setOwnerName] = useState("");
  // const [ownerTelephone, setOwnerTelephone] = useState("");
  // const [ownerAddress, setOwnerAddress] = useState("");

  // const [driverName, setDriverName] = useState("");
  // const [driverTelephone, setDriverTelephone] = useState("");
  // const [driverAddress, setDriverAddress] = useState("");

  // const [insuranceCompany, setInsuranceCompany] = useState("");
  // const [policyNo, setPolicyNo] = useState("");

  return (
    <div className="interface-screen">
      <form className="details-form navigation-elements">
        <FormInput
          type="select"
          label="Is Vehicle Involved"
          value={isVehInvolved}
          onChangeSet={setIsVehInvolved}
          options={["yes", "no"]}
        />

        {isVehInvolved === "yes" && (
          <div className="details-form__input">
            <FormInput
              type="input-text"
              placeholder="Reg N"
              value={tpRegNumber}
              onChangeSet={setTpRegNumber}
            />

            <FormInput
              type="input-text"
              placeholder="Make"
              value={tpMake}
              onChangeSet={setTpMake}
            />
            <FormInput
              type="input-text"
              placeholder="Model"
              value={tpModel}
              onChangeSet={setTpModel}
            />
            <FormInput
              type="select"
              label="Is Driver owner of the vehicle"
              value={isTpDriverOwner}
              onChangeSet={setTpIsDriverOwner}
              options={["yes", "no"]}
            />

            {isTpDriverOwner !== "yes" && (
              <div>
                <FormInput
                  type="input-text"
                  placeholder="Owner's Name"
                  value={tpOwnerName}
                  onChangeSet={setTpOwnerName}
                />
                <FormInput
                  type="input-text"
                  placeholder="Owner's Telephone"
                  value={tpOwnerTelephone}
                  onChangeSet={setTpOwnerTelephone}
                />
                <FormInput
                  type="input-text"
                  placeholder="Owner's Address"
                  value={tpOwnerAddress}
                  onChangeSet={setTpOwnerAddress}
                />
              </div>
            )}

            <FormInput
              type="input-text"
              placeholder="Driver's Name"
              value={tpDriverName}
              onChangeSet={setTpDriverName}
            />
            <FormInput
              type="input-text"
              placeholder="Driver's Telephone"
              value={tpDriverTelephone}
              onChangeSet={setTpDriverTelephone}
            />
            <FormInput
              type="input-text"
              placeholder="Driver's Address"
              value={tpDriverAddress}
              onChangeSet={setTpDriverAddress}
            />
            <FormInput
              type="input-text"
              placeholder="Insurance Company"
              value={tpInsuranceCompany}
              onChangeSet={setTpInsuranceCompany}
            />
            <FormInput
              type="input-text"
              placeholder="Policy No"
              value={tpPolicyNo}
              onChangeSet={setTpPolicyNo}
            />
          </div>
        )}
      </form>
      <div className="btn-container">
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Button
          onClick={() => {
            setTpDetails(true);
            navigate(-1);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default TpDetailsForm;
