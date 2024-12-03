import { Link } from "react-router-dom";
import DriverSelection from "../../components/DriverSelection/DriverSelection";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";

import styles from "./MainScreen.module.css";

function MainScreen() {
  return (
    <div className={styles.containerStart}>
      <DriverSelection>Driver:</DriverSelection>
      <Link to="steps-nav" className="link-cta start">
        Start Accident Form
      </Link>

      <ButtonContainer />
    </div>
  );
}

export default MainScreen;
