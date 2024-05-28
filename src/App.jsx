import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/Home.jsx";
import QuickAssist from "./components/QuickAssist.jsx";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import OurStore from "./components/OurStore.jsx";
import TShirt from "./Pages/TShirt.jsx";
import Shirts from "./Pages/Shirts.jsx";
import Shorts from "./Pages/Shorts.jsx";
import DryFit from "./Pages/DryFit.jsx";
import Denims from "./Pages/Denims.jsx";
import ColorPants from "./Pages/ColorPants.jsx";
import Caps from "./Pages/Caps.jsx";

function App() {
  const location = useLocation();
  const showNavBar =
    location.pathname !== "/signup" && location.pathname !== "/signin";

  return (
    <div>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quickAssist" element={<QuickAssist />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/ourStore" element={<OurStore />} />
        <Route path="/tshirt" element={<TShirt />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/color-pants" element={<ColorPants />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/denims" element={<Denims />} />
        <Route path="/dry-fit" element={<DryFit />} />
        <Route path="/caps" element={<Caps />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWithRouter;
