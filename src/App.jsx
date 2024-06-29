import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className="bg-zinc-800/10 bg-container w-full h-full">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rules" element={<Rules />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact" element={<ContactUs />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
