import ButtonIcon from "../ButtonIcon/ButtonIcon";
import IconInfo from "../../Icons/IconInfo";
import IconSettings from "../../Icons/IconSettings";
import styles from "./ButtonContainer.module.css";

function ButtonContainer(): JSX.Element {
  return (
    <div className={styles.buttonContainerConfig}>
      <ButtonIcon>
        <IconInfo />
      </ButtonIcon>
      <ButtonIcon>
        <IconSettings />
      </ButtonIcon>
    </div>
  );
}

export default ButtonContainer;
