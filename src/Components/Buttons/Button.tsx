import { ReactNode } from "react";

interface Props {
  children?: string | ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
