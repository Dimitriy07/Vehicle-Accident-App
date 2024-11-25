import styles from "./Header.module.css";

function Logo() {
  return (
    <div>
      <img src="/MTL_Logo.png" alt="Comany Logo" className={styles.logo} />
    </div>
  );
}

export default Logo;
