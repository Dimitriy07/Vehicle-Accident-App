import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./pages/MainScreen/MainScreen";
import Info from "./pages/Info/Info";
import StepsNavigation from "./pages/StepsNavigation/StepsNavigation";
import { DriverProvider } from "./context/DriverContext";
import Steps from "./pages/Steps/Steps";

function App() {
  return (
    <div>
      <DriverProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="info" element={<Info />} />
            <Route path="steps-nav" element={<StepsNavigation />}>
              <Route path="steps" element={<Steps />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DriverProvider>
    </div>
  );
}

export default App;
