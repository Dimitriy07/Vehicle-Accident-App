import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";
import Button from "../../components/Button/Button";

function StepsNavigation() {
  const { setStartAccident } = useFormContext();

  const navigate = useNavigate();
  useEffect(
    function () {
      setStartAccident(true);
    },
    [setStartAccident]
  );
  return (
    <>
      <ul className="container-display">
        <li>
          <Link to="steps" className="link-cta navigate">
            Immediate Steps
          </Link>
        </li>
        <li>
          <Link to="form" className="link-cta navigate">
            Form
          </Link>
        </li>
      </ul>
      <div className="btn-container">
        <Button onClick={() => navigate("/", { replace: true })}>Back</Button>
        <div></div>
      </div>
    </>
  );
}

export default StepsNavigation;
