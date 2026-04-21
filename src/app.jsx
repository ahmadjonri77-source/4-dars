import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./companets/main/main";
import Section1 from "./companets/main/sections/section1";
import Section2 from "./companets/main/sections/section2";
import Section3 from "./companets/main/sections/section3";
import Home from "./companets/main/sections/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<Section1/>} />
          <Route path="/features" element={<Section2/>} />
          <Route path="/pricing" element={<Section3/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
