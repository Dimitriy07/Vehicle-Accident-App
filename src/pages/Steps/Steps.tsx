import Button from "../../components/Button/Button";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";

function Steps() {
  const navigate = useNavigate();
  const { photoDetails } = useFormContext();

  return (
    <div className="container-display">
      <ul className="container-display">
        <li>
          <Link
            to="photos"
            className={`${"link-cta navigate"} ${
              photoDetails ? "checked" : ""
            }`}
          >
            Photos
          </Link>
        </li>
        <li>
          <Link
            to="tp-details"
            className={`${"link-cta navigate"} ${
              photoDetails ? "checked" : ""
            }`}
          >
            TP Details
          </Link>
        </li>
        <li>
          <Link
            to="call-manager"
            className={`${"link-cta navigate"} ${
              photoDetails ? "checked" : ""
            }`}
          >
            Call Manager
          </Link>
        </li>
        <li>
          <Outlet />
        </li>
      </ul>

      <div className="btn-container">
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default Steps;
