import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/Public/LandingPage";
import Login from "./Pages/Public/Login";
import Register from "./Pages/Public/Register";
import RequiredInfo from "./Pages/Onboarding/RequiredInfo";
import AdditionalInformation from "./Pages/Onboarding/AdditionalInformation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/onboarding/required"
          element={<RequiredInfo />}
        />
        <Route 
        path="onboarding/additional"
        element={<AdditionalInformation/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;