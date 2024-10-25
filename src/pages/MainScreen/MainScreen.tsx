import { useState } from "react";

import Steps from "../Steps/Steps";
import Form from "../Form/Form";
import NavigationEl from "../../components/Navigation/Navigation";
import "../../style.css";

function MainScreen() {
  const [steps, setSteps] = useState(false);
  const [forms, setForms] = useState(false);
  const [mainScreen, setMainScreen] = useState(true);

  function handleSteps() {
    setSteps(!steps);
    setForms(false);
    setMainScreen(false);
  }

  function handleForm() {
    setForms(!forms);
    setSteps(false);
    setMainScreen(false);
  }

  const handleObj = {
    setSteps,
    setForms,
    setMainScreen,
  };

  return (
    <div className="main-screen">
      {mainScreen && (
        <ul className="navigation-list">
          <NavigationEl onClick={handleSteps}>Steps</NavigationEl>
          <NavigationEl onClick={handleForm}>Form</NavigationEl>
        </ul>
      )}
      {steps && <Steps navObj={handleObj} />}
      {forms && <Form navObj={handleObj} />}
    </div>
  );
}

export default MainScreen;
