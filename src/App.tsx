import { useState } from "react";

import "./App.css";
import MainScreen from "./pages/MainScreen/MainScreen";
import NavigationEl from "./components/Navigation/Navigation";

const driverList = [
  {
    driverName: "John Blue",
    driverDob: "01/01/1970",
    driverPhoneNumber: "07777111222",
    driverAddress: "1 London Road, London, B1 2BB",
  },
  {
    driverName: "Mike White",
    driverDob: "02/02/1971",
    driverPhoneNumber: "07777222111",
    driverAddress: "2 Manchester Road, Manchester, C1 2CC",
  },
];

function App() {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  function handleDriverConfirm() {
    setIsConfirmed(true);
  }

  function LandingPage() {
    return (
      <>
        <label>Choose driver's name:</label>
        <select>
          <option value="first">first driver</option>
          <option value="second">second driver</option>
        </select>
        <NavigationEl onClick={() => handleDriverConfirm()}>
          Start Accident Form
        </NavigationEl>
        
      </>
    );
  }

  return <>{isConfirmed ? <MainScreen /> : <LandingPage />}</>;
}

export default App;
