import Button from "../Components/Buttons/Button";
import { NavigationHandlers, handleBack } from "../utils/navigationSteps";
interface PictureDetailsProps {
  navObj: NavigationHandlers;
}

function PictureDetails({ navObj }: PictureDetailsProps) {
  return (
    <div className="photo-details interface-screen">
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
        <Button onClick={() => handleBack(navObj)}>Back</Button>
      </div>
    </div>
  );
}

export default PictureDetails;
