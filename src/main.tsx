import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./pages/MainScreen/MainScreen.tsx";
// import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="steps" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
