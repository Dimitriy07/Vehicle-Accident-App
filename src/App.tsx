import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainScreen from "./pages/MainScreen/MainScreen";
import Info from "./pages/Info/Info";
import StepsNavigation from "./pages/StepsNavigation/StepsNavigation";
import Steps from "./pages/Steps/Steps";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";
import CallManager from "./components/CallManager/CallManager";

import { DriverProvider } from "./context/DriverContext";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <div>
      <DriverProvider>
        <FormProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route path="info" element={<Info />} />
              <Route path="steps-nav" element={<StepsNavigation />} />
              <Route path="steps-nav/steps" element={<Steps />}>
                <Route path="call-manager" element={<CallManager />} />
              </Route>
              <Route
                path="steps-nav/steps/photos"
                element={<PhotoDetails />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </FormProvider>
      </DriverProvider>
    </div>
  );
}

export default App;
