import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainScreen from "./pages/MainScreen/MainScreen";
import Info from "./pages/Info/Info";
import StepsNavigation from "./pages/StepsNavigation/StepsNavigation";
import Steps from "./pages/Steps/Steps";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";
import CallManager from "./components/CallManager/CallManager";

import { DriverProvider } from "./context/DriverContext";
import { FormProvider } from "./context/FormContext";
import TpDetailsForm from "./pages/TpDetailsForm/TpDetailsForm";
import Form from "./pages/Form/Form";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <DriverProvider>
        <FormProvider>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route path="info" element={<Info />} />
              <Route path="steps-nav" element={<StepsNavigation />} />
              <Route path="steps-nav/steps" element={<Steps />}>
                <Route path="call-manager" element={<CallManager />} />
              </Route>
              <Route path="steps-nav/steps/photos" element={<PhotoDetails />} />
              <Route
                path="steps-nav/steps/tp-details"
                element={<TpDetailsForm />}
              />
              <Route path="steps-nav/form" element={<Form />} />
            </Routes>
          </BrowserRouter>
        </FormProvider>
      </DriverProvider>
    </div>
  );
}

export default App;
