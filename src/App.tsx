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
      <div className="start-accident">
        <div className="start-input">
          <label className="dropdown-element">Choose driver's name:</label>
          <select className="dropdown-element">
            <option value="first">first driver</option>
            <option value="second">second driver</option>
          </select>
        </div>
        <div>
          <NavigationEl
            onClick={() => handleDriverConfirm()}
            bgColor="#BD2F44"
            color="#fff"
          >
            Start Accident Form
          </NavigationEl>
        </div>
        <div className="config-button__container">
          <button>
            <svg
              viewBox="0 0 21 21"
              fill="currentColor"
              height="8rem"
              width="8rem"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(3 3)"
              >
                <path
                  strokeWidth={0.933}
                  d="M7.5.5c.351 0 .697.026 1.034.076l.508 1.539c.445.127.868.308 1.26.536l1.46-.704c.517.397.977.865 1.365 1.389l-.73 1.447c.221.396.395.822.514 1.27l1.53.533a7.066 7.066 0 01-.017 1.948l-1.539.508a5.567 5.567 0 01-.536 1.26l.704 1.46a7.041 7.041 0 01-1.389 1.365l-1.447-.73c-.396.221-.822.395-1.27.514l-.533 1.53a7.066 7.066 0 01-1.948-.017l-.508-1.539a5.567 5.567 0 01-1.26-.536l-1.46.704a7.041 7.041 0 01-1.365-1.389l.73-1.447a5.565 5.565 0 01-.514-1.27l-1.53-.534a7.066 7.066 0 01.017-1.947l1.539-.508c.127-.445.308-.868.536-1.26l-.704-1.46a7.041 7.041 0 011.389-1.365l1.447.73c.396-.221.822-.395 1.27-.514l.534-1.53C6.886.52 7.191.5 7.5.5z"
                />
                <path d="M10.5 7.5 A3 3 0 0 1 7.5 10.5 A3 3 0 0 1 4.5 7.5 A3 3 0 0 1 10.5 7.5 z" />
              </g>
            </svg>
          </button>
          <button>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="8rem"
              width="8rem"
            >
              <path d="M12 10a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm8.46-.32A8.5 8.5 0 007.3 3.36a8.56 8.56 0 00-3.76 6.27A8.46 8.46 0 006 16.46l5.3 5.31a1 1 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83zm-3.86 5.37l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24zm-3.68-7.48a.56.56 0 00-.09-.17l-.12-.15A1 1 0 0011.8 7h-.18l-.18.09-.15.13-.12.15a.56.56 0 00-.09.17.6.6 0 00-.06.19A1.23 1.23 0 0011 8a.88.88 0 00.08.39 1.11 1.11 0 00.21.32 1.06 1.06 0 00.33.22 1.07 1.07 0 00.76 0 1.19 1.19 0 00.33-.22 1.11 1.11 0 00.21-.32A1 1 0 0013 8a1.23 1.23 0 000-.19.6.6 0 00-.08-.24z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return <>{isConfirmed ? <MainScreen /> : <LandingPage />}</>;
}

export default App;
