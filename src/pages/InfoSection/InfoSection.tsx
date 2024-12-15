import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{t("info.title")}</h1>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t("info.definition.title")}</h2>
          <p>{t("info.definition.description")}</p>
          <ul className={styles.list}>
            <li>{t("info.definition.point1")}</li>
            <li>{t("info.definition.point2")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t("info.actions.title")}</h2>
          <h3 className={styles.subheading}>
            {t("info.actions.ensureSafety")}
          </h3>
          <ul className={styles.list}>
            <li>{t("info.actions.safety1")}</li>
            <li>{t("info.actions.safety2")}</li>
            <li>{t("info.actions.safety3")}</li>
          </ul>

          <h3 className={styles.subheading}>
            {t("info.actions.callEmergency")}
          </h3>
          <ul className={styles.list}>
            <li>{t("info.actions.call999")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t("info.duties.title")}</h2>
          <p>{t("info.duties.description")}</p>
          <ul className={styles.list}>
            <li>{t("info.duties.stop")}</li>
            <li>{t("info.duties.exchangeDetails")}</li>
            <li>{t("info.duties.showInsurance")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t("info.reportToPolice.title")}</h2>
          <ul className={styles.list}>
            <li>{t("info.reportToPolice.report24Hours")}</li>
            <li>{t("info.reportToPolice.reportAsap")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t("info.collectEvidence.title")}</h2>
          <ul className={styles.list}>
            <li>
              {t("info.collectEvidence.takePhotos")}
              <ul className={styles.sublist}>
                <li>{t("info.collectEvidence.damage")}</li>
                <li>{t("info.collectEvidence.scene")}</li>
                <li>{t("info.collectEvidence.weather")}</li>
              </ul>
            </li>
            <li>{t("info.collectEvidence.getWitness")}</li>
            <li>{t("info.collectEvidence.noLiability")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t("info.dashcam.title")}</h2>
          <p>{t("info.dashcam.description")}</p>
          <ul className={styles.list}>
            <li>{t("info.dashcam.clearFootage")}</li>
            <li>{t("info.dashcam.showDetails")}</li>
            <li>{t("info.dashcam.saveFootage")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t("info.movingVehicles.title")}</h2>
          <ul className={styles.list}>
            <li>{t("info.movingVehicles.moveVehicles")}</li>
            <li>{t("info.movingVehicles.checkIssues")}</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>{t("info.footer")}</p>
        </footer>
      </div>
      <div className="btn-container">
        <Button
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          {t("actions.back")}
        </Button>
        <div></div>
      </div>
    </>
  );
};

export default InfoSection;
