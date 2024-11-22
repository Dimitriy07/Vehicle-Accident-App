import emailjs from "@emailjs/browser";

import Button from "../../components/Button/Button";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";

function Steps() {
  const navigate = useNavigate();
  const { photoDetailsDone, tpDetailsDone, callManagerDone, tpRef } =
    useFormContext();

  const sendEmail = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (tpRef?.current) {
      emailjs
        .sendForm("service_0lc19w7", "template_uvnqxha", tpRef.current, {
          publicKey: "Ylao2JI4sGhuYLxwK_",
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
