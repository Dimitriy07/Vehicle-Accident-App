import { useNavigate } from "react-router";

import Button from "../../components/Button/Button";

import { useFormContext } from "../../context/FormContext";

import styles from "./PhotoDetails.module.css";

function PictureDetails() {
  const navigate = useNavigate();
  const { setPhotoDetails } = useFormContext();
  return (
    <div className={`${styles.photoDetails} container-input__form`}>
      <ul>
        <li>Take Photos from all the angles(at least 15)</li>
        <li>Take Photos inside the vehicle (how many passangers inside)</li>
        <li>Take Photo of incoming and outgoing street</li>
      </ul>
      <div>
        <h2>Example of photos to be taken:</h2>
        <img src="/accident_photo.jpg" alt="Accident photo Example" />
      </div>
      <div className="btn-container">
        <Button onClick={() => navigate("/steps-nav/steps", { replace: true })}>
          Back
        </Button>
        <Button
          onClick={() => {
            setPhotoDetails(true);
            navigate("/steps-nav/steps", { replace: true });
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default PictureDetails;
