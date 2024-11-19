
import styles from "./ButtonIcon.module.css";


function ButtonIcon({ children }: { children: JSX.Element }): JSX.Element {
  return <button className={styles.btnIcon}>{children}</button>;
}

export default ButtonIcon;
