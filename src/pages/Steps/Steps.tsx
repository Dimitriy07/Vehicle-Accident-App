import Button from "../../components/Button/Button";

import { Link, Outlet, useNavigate } from "react-router-dom";

function Steps() {
  const navigate = useNavigate();

  return (
    <div className="container-display">
      <ul className="container-display">
        <li>
          <Link to="photos" className="link-cta navigate">
            Photos
          </Link>
        </li>
        <li>
          <Link to="tp-details" className="link-cta navigate">
            TP Details
          </Link>
        </li>
        <li>
          <Link to="call-manager" className="link-cta navigate">
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
