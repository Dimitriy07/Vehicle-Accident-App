import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children?: string | ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
