import { useNavigate } from "react-router";

import { useLogicState } from "../../context/LogicStateContext";

import Button from "../../components/Button/Button";

import styles from "./PhotoDetails.module.css";
import { useTranslation } from "react-i18next";

function PictureDetails() {
  const navigate = useNavigate();
  const { setIsPhotoDetailsDone } = useLogicState();
  const { t } = useTranslation();
  return (
    <div className={`${styles.photoDetails} ${styles.containerDisplayPhoto}`}>
      <ul>
        <li>{t("photos.photoExplanation1")}</li>
        <li>{t("photos.photoExplanation2")}</li>
        <li>{t("photos.photoExplanation3")}</li>
      </ul>
      <div>
        <h2>{t("photos.photoExamples")}</h2>
        <img src="/accident_photo.jpg" alt="Accident photo Example" />
      </div>
      <div className="btn-container">
        <Button onClick={() => navigate("/steps-nav/steps", { replace: true })}>
          {t("actions.back")}
        </Button>
        <Button
          onClick={() => {
            setIsPhotoDetailsDone(true);
            navigate("/steps-nav/steps", { replace: true });
          }}
        >
          {t("actions.done")}
        </Button>
      </div>
    </div>
  );
}

export default PictureDetails;
