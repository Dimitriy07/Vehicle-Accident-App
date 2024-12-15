import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useLogicState } from "../../context/LogicStateContext";

import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { generatePDF } from "../../utils/generatePDF";
import { useContextData } from "../../hooks/useContextData";

function StepsNavigation() {
  const { isStartAccident, setIsStartAccident, isDriverSignature } =
    useLogicState();

  const data = useContextData();

  const navigate = useNavigate();
  const { t } = useTranslation();

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
                {t("stepsNavigation.immediateSteps")}
              </Link>
            </li>
            <li>
              <Link to="form" className="link-cta navigate">
                {t("stepsNavigation.form")}
              </Link>
            </li>
          </>
        )}
      </ul>
      <div className="btn-container">
        <Button onClick={() => navigate("/", { replace: true })}>
          {t("actions.back")}
        </Button>
        {isDriverSignature ? (
          <Button onClick={() => generatePDF(data)}>
            {t("actions.submit")}
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default StepsNavigation;
