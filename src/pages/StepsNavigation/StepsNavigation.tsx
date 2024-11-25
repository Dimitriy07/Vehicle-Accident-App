import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";

function StepsNavigation() {
  const { setStartAccident } = useFormContext();

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
    </>
  );
}

export default StepsNavigation;
