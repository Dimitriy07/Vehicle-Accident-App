import { useNavigate } from "react-router";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";

import styles from "./TpDetailsForm.module.css";
import { useLogicState } from "../../context/LogicStateContext";
import { useTpDetails } from "../../context/TpDetailsContext";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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

        {/*  */}
        <FormInput
          type="select"
          label={t("tpDetails.isVehInvolved")}
          value={isVehInvolved}
          onChangeSet={setIsVehInvolved}
          options={[
            { value: "no", label: t("commonAnswers.no") },
            { value: "yes", label: t("commonAnswers.yes") },
          ]}
        />
        {isVehInvolved === "yes" ? (
          <>
            <fieldset>
              <legend>{t("tpDetails.tpVehTitle")}</legend>
              <FormInput
                type="input-text"
                placeholder={t("tpDetails.tpRegNumber")}
                value={tpRegNumber}
                onChangeSet={setTpRegNumber}
              />

              <FormInput
                type="input-text"
                placeholder={t("tpDetails.tpMake")}
                value={tpMake}
                onChangeSet={setTpMake}
              />
              <FormInput
                type="input-text"
                placeholder={t("tpDetails.tpModel")}
                value={tpModel}
                onChangeSet={setTpModel}
              />
            </fieldset>
            <fieldset>
              <legend>{t("tpDetails.tpDriverOwnerTitle")}</legend>
              <FormInput
                type="select"
                label={t("tpDetails.isTpDriverOwner")}
                value={isTpDriverOwner}
                onChangeSet={setTpIsDriverOwner}
                options={[
                  { value: "no", label: t("commonAnswers.no") },
                  { value: "yes", label: t("commonAnswers.yes") },
                ]}
              />

              {isTpDriverOwner !== "yes" && (
                <>
                  <FormInput
                    type="input-text"
                    placeholder={t("tpDetails.tpOwnerName")}
                    value={tpOwnerName}
                    onChangeSet={setTpOwnerName}
                  />
                  <FormInput
                    type="input-text"
                    placeholder={t("tpDetails.tpOwnerTelephone")}
                    value={tpOwnerTelephone}
                    onChangeSet={setTpOwnerTelephone}
                  />
                  <FormInput
                    type="input-text"
                    placeholder={t("tpDetails.tpOwnerAddress")}
                    value={tpOwnerAddress}
                    onChangeSet={setTpOwnerAddress}
                  />
                </>
              )}

              <FormInput
                type="input-text"
                placeholder={t("tpDetails.tpDriverName")}
                value={tpDriverName}
                onChangeSet={setTpDriverName}
              />
              <FormInput
                type="input-text"
                placeholder={t("tpDetails.tpDriverTelephone")}
                value={tpDriverTelephone}
                onChangeSet={setTpDriverTelephone}
              />
              <FormInput
                type="input-text"
                placeholder={t("tpDetails.tpDriverAddress")}
                value={tpDriverAddress}
                onChangeSet={setTpDriverAddress}
              />
              <FormInput
                type="input-text"
                placeholder={t("tpDetails.tpInsuranceCompany")}
                value={tpInsuranceCompany}
                onChangeSet={setTpInsuranceCompany}
              />
              <FormInput
                type="input-text"
                placeholder={t("tpDetails.tpPolicyNo")}
                value={tpPolicyNo}
                onChangeSet={setTpPolicyNo}
              />
            </fieldset>
          </>
        ) : (
          <fieldset>
            <legend>{t("tpDetails.tpDetails")}</legend>
            <FormInput
              type="input-text"
              placeholder={t("tpDetails.tpName")}
              value={tpDriverName}
              onChangeSet={setTpDriverName}
            />
            <FormInput
              type="input-text"
              placeholder={t("tpDetails.tpTelephone")}
              value={tpDriverTelephone}
              onChangeSet={setTpDriverTelephone}
            />
            <FormInput
              type="input-text"
              placeholder={t("tpDetails.tpAddress")}
              value={tpDriverAddress}
              onChangeSet={setTpDriverAddress}
            />
          </fieldset>
        )}
      </form>
      <div className="btn-container">
        <Button onClick={() => navigate("/steps-nav/steps", { replace: true })}>
          {t("actions.back")}
        </Button>
        <Button
          onClick={() => {
            handleSaveForm();
            setIsTpDetailsDone(true);
            navigate("/steps-nav/steps", { replace: true });
          }}
        >
          {t("actions.submit")}
        </Button>
      </div>
    </div>
  );
}

export default TpDetailsForm;
