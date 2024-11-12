import { ReactNode } from "react";
import "./navigation.css";

interface Props {
  children: string | ReactNode;
  onClick?: () => void;
  taskCompletion?: boolean;
  bgColor?: string;
  color?: string;
}

function NavigationEl({
  children,
  onClick,
  taskCompletion,
  bgColor,
  color,
}: Props) {
  return (
    <li
      style={{ backgroundColor: bgColor, color: color }}
      className={
        "navigation-list__element" + (taskCompletion ? " checked-steps" : "")
      }
      onClick={onClick}
    >
      {children}
    </li>
  );
}

export default NavigationEl;
