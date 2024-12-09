import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainScreen from "./pages/MainScreen/MainScreen";
import Info from "./pages/Info/Info";
import StepsNavigation from "./pages/StepsNavigation/StepsNavigation";

import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";
import CallManager from "./components/CallManager/CallManager";
import ImmediateSteps from "./pages/ImmediateSteps/ImmediateSteps";
import TpDetailsForm from "./pages/TpDetailsForm/TpDetailsForm";
import Form from "./pages/Form/Form";
import Header from "./components/Header/Header";

import { DriverProvider } from "./context/DriverContext";
import { FormProvider } from "./context/FormContext";

import { LogicStateProvider } from "./context/LogicStateContext";
import { TpDetailsProvider } from "./context/TpDetailsContext";
import { CanvasProvider } from "./context/CanvasContext";
import { VehicleProvider } from "./context/VehicleContext";
import { GeolocationProvider } from "./context/GeolocationContext";

function App() {
  return (
    <div className="app">
      <DriverProvider>
        <VehicleProvider>
          <GeolocationProvider>
            <FormProvider>
              <LogicStateProvider>
                <TpDetailsProvider>
                  <CanvasProvider>
                    <Header />
                    <BrowserRouter>
                      <Routes>
                        <Route path="/" element={<MainScreen />} />
                        <Route path="info" element={<Info />} />
                        <Route path="steps-nav" element={<StepsNavigation />} />
                        <Route
                          path="steps-nav/steps"
                          element={<ImmediateSteps />}
                        >
                          <Route
                            path="call-manager"
                            element={<CallManager />}
                          />
                        </Route>
                        <Route
                          path="steps-nav/steps/photos"
                          element={<PhotoDetails />}
                        />
                        <Route
                          path="steps-nav/steps/tp-details"
                          element={<TpDetailsForm />}
                        />
                        <Route path="steps-nav/form" element={<Form />} />
                      </Routes>
                    </BrowserRouter>
                  </CanvasProvider>
                </TpDetailsProvider>
              </LogicStateProvider>
            </FormProvider>
          </GeolocationProvider>
        </VehicleProvider>
      </DriverProvider>
    </div>
  );
}

export default App;
