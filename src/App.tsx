import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import FileNotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="*" element={<FileNotFound />} />
      </Routes>
    </div>
  );
}
