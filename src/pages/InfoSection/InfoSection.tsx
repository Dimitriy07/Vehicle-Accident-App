import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Road Traffic Accident Information</h1>

        <section className={styles.section}>
          <h2 className={styles.heading}>
            Definition of a Road Traffic Accident
          </h2>
          <p>
            An accident occurs if a mechanically propelled vehicle on a road or
            public place causes:
          </p>
          <ul className={styles.list}>
            <li>Injury to anyone except the driver.</li>
            <li>
              Damage to another vehicle, specified animals (horse, cattle, ass,
              mule, sheep, pig, goat or dog), or property (fixed to, growing in
              or otherwise forming part of the land on which the road or public
              place is, or adjacent to it.).
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Immediate Actions</h2>
          <h3 className={styles.subheading}>Ensure Safety:</h3>
          <ul className={styles.list}>
            <li>Move to a safe location if possible.</li>
            <li>Turn on hazard lights and vehicle lights at night.</li>
            <li>Place a warning triangle if safe to do so.</li>
          </ul>

          <h3 className={styles.subheading}>Call Emergency Services:</h3>
          <ul className={styles.list}>
            <li>Dial 999 for police, fire, or ambulance if needed.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Statutory Duties</h2>
          <p>After an accident, drivers must:</p>
          <ul className={styles.list}>
            <li>Stop immediately.</li>
            <li>
              Exchange Details: Provide name, address, and vehicle registration
              to other parties.
            </li>
            <li>If injury occurs, show a valid insurance certificate.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>When to Report to Police</h2>
          <ul className={styles.list}>
            <li>
              Report to the police within 24 hours if you can’t exchange details
              at the scene.
            </li>
            <li>Report as soon as possible; delays can lead to prosecution.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Collect Evidence</h2>
          <ul className={styles.list}>
            <li>
              Take photos of:
              <ul className={styles.sublist}>
                <li>Damage to all vehicles</li>
                <li>Accident scene, road signs, and skid marks</li>
                <li>Weather conditions</li>
              </ul>
            </li>
            <li>Get witness details if possible.</li>
            <li>Do not admit liability at the scene.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>In-Vehicle Cameras</h2>
          <p>If using a dashcam, ensure footage is:</p>
          <ul className={styles.list}>
            <li>Clear (even in low light)</li>
            <li>Shows time, date, and GPS location</li>
            <li>Save footage immediately to prevent overwriting.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Moving Vehicles</h2>
          <ul className={styles.list}>
            <li>
              Move vehicles off the road if possible, after taking photos.
            </li>
            <li>
              Check for fluid leaks, brake, and steering issues before
              continuing to drive.
            </li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>
            Following these steps ensures compliance with UK law and protects
            your legal and insurance rights.
          </p>
        </footer>
      </div>
      <div className="btn-container">
        <Button
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Back
        </Button>
        <div></div>
      </div>
    </>
  );
};

export default InfoSection;
