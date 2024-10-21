import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  onClick?: () => void;
  taskCompletion?: boolean;
}

function NavigationEl({ children, onClick, taskCompletion }: Props) {
  return (
    <li
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
