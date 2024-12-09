import { useNavigate } from "react-router";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";

import styles from "./TpDetailsForm.module.css";
import { useLogicState } from "../../context/LogicStateContext";
import { useTpDetails } from "../../context/TpDetailsContext";

function TpDetailsForm() {
  const navigate = useNavigate();
  const {
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
    tpRef,
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
    setTpFormData,
  } = useTpDetails();

  const { setIsTpDetailsDone } = useLogicState();

  function handleSaveForm() {
    if (tpRef.current) {
      const formData = new FormData(tpRef.current);
      setTpFormData(formData);
    }
  }

  const message = `TP information (preliminary email)
  Vehicle Information
  RegN: ${tpRegNumber}
  Make: ${tpMake}
  Model: ${tpModel}
  Owner:${tpOwnerName}
  Driver Name${tpDriverName}
  Driver Phone: ${tpDriverTelephone}
  Driver Address: ${tpDriverAddress}
  `;

  return (
    <div className="container-input__form">
      <form className={styles.form} ref={tpRef}>
        {/* Hidden information to send email */}

        <FormInput
          type="hidden"
          value={import.meta.env.VITE_EMAIL_TO}
          inputName="to_email"
        />
        <FormInput type="hidden" value="Test" inputName="from_name" />
        <FormInput type="hidden" value={message} inputName="from_message" />
        <FormInput
          type="select"
          label="Is Vehicle Involved"
          value={isVehInvolved}
          onChangeSet={setIsVehInvolved}
          options={["yes", "no"]}
        />
        {isVehInvolved === "yes" ? (
          <>
            <fieldset>
              <legend>TP Vehicle information</legend>
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
            </fieldset>
            <fieldset>
              <legend>TP Driver/Owner information</legend>
              <FormInput
                type="select"
                label="Is Driver owner of the vehicle"
                value={isTpDriverOwner}
                onChangeSet={setTpIsDriverOwner}
                options={["yes", "no"]}
              />

              {isTpDriverOwner !== "yes" && (
                <>
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
                </>
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
            </fieldset>
          </>
        ) : (
          <fieldset>
            <legend>Third Party Details</legend>
            <FormInput
              type="input-text"
              placeholder="Name"
              value={tpDriverName}
              onChangeSet={setTpDriverName}
            />
            <FormInput
              type="input-text"
              placeholder="Telephone"
              value={tpDriverTelephone}
              onChangeSet={setTpDriverTelephone}
            />
            <FormInput
              type="input-text"
              placeholder="Address"
              value={tpDriverAddress}
              onChangeSet={setTpDriverAddress}
            />
          </fieldset>
        )}
      </form>
      <div className="btn-container">
        <Button onClick={() => navigate("/steps-nav/steps", { replace: true })}>
          Back
        </Button>
        <Button
          onClick={() => {
            handleSaveForm();
            setIsTpDetailsDone(true);
            navigate("/steps-nav/steps", { replace: true });
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default TpDetailsForm;
