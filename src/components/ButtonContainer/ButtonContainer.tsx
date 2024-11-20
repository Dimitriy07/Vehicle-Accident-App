import ButtonIcon from "../ButtonIcon/ButtonIcon";
import IconInfo from "../../Icons/IconInfo";
import IconSettings from "../../Icons/IconSettings";
import styles from "./ButtonContainer.module.css";
import { Link } from "react-router-dom";

function ButtonContainer(): JSX.Element {
  return (
    <div className={styles.buttonContainerConfig}>
      <Link to="info">
        <ButtonIcon>
          <IconSettings />
        </ButtonIcon>
      </Link>
      <ButtonIcon>
        <IconInfo />
      </ButtonIcon>
    </div>
  );
}

export default ButtonContainer;
