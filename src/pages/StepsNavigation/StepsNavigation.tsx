import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useLogicState } from "../../context/LogicStateContext";

import Button from "../../components/Button/Button";

function StepsNavigation() {
  const { isStartAccident, setIsStartAccident } = useLogicState();

  //Set state that accident started to true (it needs to deny access to steps and form without choosing a driver and a vehicle)
  const navigate = useNavigate();
  useEffect(
    function () {
      setIsStartAccident(true);
    },
    [setIsStartAccident]
  );
  return (
    <>
      <ul className="container-display">
        {isStartAccident && (
          <>
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
          </>
        )}
      </ul>
      <div className="btn-container">
        <Button onClick={() => navigate("/", { replace: true })}>Back</Button>
        <div></div>
      </div>
    </>
  );
}

export default StepsNavigation;
