import HelperText from "./HelperText";
import Logo from "./Logo";
import styles from "./Header.module.css";
import ProgressInfo from "./ProgressInfo";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <HelperText />
      <ProgressInfo />
    </div>
  );
}

export default Header;
