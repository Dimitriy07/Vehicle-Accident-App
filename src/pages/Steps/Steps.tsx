import emailjs from "@emailjs/browser";

import Button from "../../components/Button/Button";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";

import { createHtmlFromData } from "../../utils/createHtmlForm";

function Steps() {
  const navigate = useNavigate();
  const { photoDetailsDone, tpDetailsDone, callManagerDone, tpFormData } =
    useFormContext();

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
              photoDetailsDone ? "checked" : ""
            }`}
          >
            Photos
          </Link>
        </li>
        <li>
          <Link
            to="tp-details"
            className={`${"link-cta navigate"} ${
              tpDetailsDone ? "checked" : ""
            }`}
          >
            TP Details
          </Link>
        </li>
        <li>
          <Link
            to="call-manager"
            className={`${"link-cta navigate"} ${
              callManagerDone ? "checked" : ""
            }`}
          >
            Call Manager
          </Link>
        </li>
        <li>
          <Outlet />
        </li>
      </ul>

      <div className="btn-container">
        <Button onClick={() => navigate("/steps-nav", { replace: true })}>
          Back
        </Button>
        <Button
          onClick={() => {
            sendEmail();
            navigate("/steps-nav", { replace: true });
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Steps;
