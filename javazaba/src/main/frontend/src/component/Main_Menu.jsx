import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogoImg from "./LogoImg";
import Study from "./Study";

const MainMenu = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={LogoImg} />
                <Route path="/study" element={Study} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainMenu;