import { Link } from "react-router-dom";

function StepsNavigation() {
  return (
    <>
      <ul className="container-display">
        <li>
          <Link to="steps" className="link-cta navigate">
            Steps
          </Link>
        </li>
        <li>
          <Link to="form" className="link-cta navigate">
            Form
          </Link>
        </li>
      </ul>
    </>
  );
}

export default StepsNavigation;
