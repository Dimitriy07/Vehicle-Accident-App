import { Link, Outlet } from "react-router-dom";
import styles from "./StepsNavigation.module.css";
// function StepsNavigation() {
//   const [steps, setSteps] = useState(false);
//   const [forms, setForms] = useState(false);
//   const [mainScreen, setMainScreen] = useState(true);

//   function handleSteps() {
//     setSteps(!steps);
//     setForms(false);
//     setMainScreen(false);
//   }

//   function handleForm() {
//     setForms(!forms);
//     setSteps(false);
//     setMainScreen(false);
//   }

//   const handleObj = {
//     setSteps,
//     setForms,
//     setMainScreen,
//   };

//   return (
//     <div className="main-screen">
//       {mainScreen && (
//         <ul className="navigation-list">
//           <NavigationEl onClick={handleSteps}>Steps</NavigationEl>
//           <NavigationEl onClick={handleForm}>Form</NavigationEl>
//         </ul>
//       )}
//       {steps && <Steps navObj={handleObj} />}
//       {forms && <Form navObj={handleObj} />}
//     </div>
//   );
// }

// export default StepsNavigation;

function StepsNavigation() {
  return (
    <div className={styles.containerNavigation}>
      <ul className={styles.ulListNav}>
        <Link to="steps" className="link-cta navigate">
          Steps
        </Link>
        {/* <NavigationEl onClick={handleSteps}>Steps</NavigationEl>
          <NavigationEl onClick={handleForm}>Form</NavigationEl> */}
      </ul>

      {/* )}
      {steps && <Steps navObj={handleObj} />}
      {forms && <Form navObj={handleObj} />} */}
    </div>
  );
}

export default StepsNavigation;
