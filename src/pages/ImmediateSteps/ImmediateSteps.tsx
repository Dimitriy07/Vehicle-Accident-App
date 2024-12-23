/* eslint-disable @typescript-eslint/no-unused-vars */
import emailjs from "@emailjs/browser";

import { useEffect } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";

import { useLogicState } from "../../context/LogicStateContext";
import { createHtmlFromData } from "../../utils/createHtmlForm";

import Button from "../../components/Button/Button";
import { useTpDetails } from "../../context/TpDetailsContext";
import { useTranslation } from "react-i18next";

function ImmediateSteps() {
  const navigate = useNavigate();
  const {
    isPhotoDetailsDone,
    isTpDetailsDone,
    isCallManagerDone,
    setIsStepsStarts,
    setIsStepsDone,
  } = useLogicState();
  const { tpFormData } = useTpDetails();

  const { t } = useTranslation();
  useEffect(() => {
    setIsStepsStarts(true);
  }, [setIsStepsStarts]);

  // Create a new form element from FormData to HTML Form Data
  const recreatedForm = createHtmlFromData(tpFormData);

  const sendEmail = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (tpFormData) {
      emailjs
        .sendForm(emailServiceId, emailTemplateId, recreatedForm, {
          publicKey: emailPublicKey,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="container-display">
      <ul className="container-display">
        <li>
          <Link
            to="photos"
            className={`${"link-cta navigate"} ${
              isPhotoDetailsDone ? "checked" : ""
            }`}
          >
            {t("immediateSteps.photos")}
          </Link>
        </li>
        <li>
          <Link
            to="tp-details"
            className={`${"link-cta navigate"} ${
              isTpDetailsDone ? "checked" : ""
            }`}
          >
            {t("immediateSteps.tpDetails")}
          </Link>
        </li>
        <li>
          <Link
            to="call-manager"
            className={`${"link-cta navigate"} ${
              isCallManagerDone ? "checked" : ""
            }`}
          >
            {t("immediateSteps.callManager")}
          </Link>
        </li>
        <li>
          <Outlet />
        </li>
      </ul>

      <div className="btn-container">
        <Button onClick={() => navigate("/steps-nav", { replace: true })}>
          {t("actions.back")}
        </Button>
        <Button
          onClick={() => {
            // sendEmail();
            setIsStepsDone(true);
            navigate("/steps-nav", { replace: true });
          }}
        >
          {t("actions.submit")}
        </Button>
      </div>
    </div>
  );
}

export default ImmediateSteps;
