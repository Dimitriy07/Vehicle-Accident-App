import { Link } from "react-router-dom";
import { FormProvider } from "../../context/FormContext";

function StepsNavigation() {
  return (
    <>
      <FormProvider>
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
      </FormProvider>
    </>
  );
}

export default StepsNavigation;
