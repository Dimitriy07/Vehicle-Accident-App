import { useState } from "react";

// import Button from "../Components/Buttons/Button";
import TpDetailsForm from "../TpDetailsForm/TpDetailsForm";
import NavigationEl from "../Components/Navigation/Navigation";
import PictureDetails from "../PictureDetails/PictureDetails";
import Button from "../Components/Buttons/Button";
import {
  MainNavigationHandlers,
  handleBackToMain,
} from "../utils/navigationSteps";

interface StepsProps {
  navObj: MainNavigationHandlers;
}

function Steps({ navObj }: StepsProps) {
  const [pictureDetails, setPictureDetails] = useState(false);
  const [tpDetailsForm, setTpDetailsForm] = useState(false);
  const [managerDetails, setManagerDetails] = useState(false);
  const [stepsScreen, setStepsScreen] = useState(true);
  const [taskCompletionPicture, setTascCompletionPicture] = useState(false);
  const [taskCompletionTpDetails, setTascCompletionTpDetails] = useState(false);
  const [taskCompletionCallManager, setTascCompletionCallManager] =
    useState(false);

  function handleTpDetailsForm() {
    setTpDetailsForm(true);
    setStepsScreen(false);
    setTascCompletionTpDetails(true);
  }

  function handlePictureDetails() {
    setPictureDetails(true);
    setStepsScreen(false);
    setTascCompletionPicture(true);
  }

  function handleManagerDetails() {
    setManagerDetails(!managerDetails);
    setTascCompletionCallManager(true);
  }

  const handleObj = {
    setPictureDetails,
    setTpDetailsForm,
    setStepsScreen,
  };

  function ManagerDetails() {
    return <div className="interface-info">Immediately call fleet manager</div>;
  }

  return (
    <>
      {stepsScreen && (
        <div className="interface-screen">
          <div className="navigation-elements">
            <NavigationEl
              onClick={handlePictureDetails}
              taskCompletion={taskCompletionPicture}
            >
              Photos
            </NavigationEl>
            <NavigationEl
              onClick={handleTpDetailsForm}
              taskCompletion={taskCompletionTpDetails}
            >
              TP Details
            </NavigationEl>
            <span onClick={handleManagerDetails}>
              <NavigationEl taskCompletion={taskCompletionCallManager}>
                Call Manager
              </NavigationEl>
            </span>
            {managerDetails && <ManagerDetails />}
          </div>
          <div className="btn-container">
            <Button onClick={() => handleBackToMain(navObj)}>Back</Button>
            <Button>Submit</Button>
          </div>
        </div>
      )}
      {tpDetailsForm && <TpDetailsForm navObj={handleObj} />}
      {pictureDetails && <PictureDetails navObj={handleObj} />}
    </>
  );
}

export default Steps;
