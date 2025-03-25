import * as React from "react";
//import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import ContractPage from "./components/ContractPage.tsx";
import TechnologyPage from "./components/TechnologyPage.tsx";


const App: React.FC = () => {
    return (
        <div
            className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
            <div className="fixed top-0 -z-10 h-full w-full">
            <div
                className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-gradient-to-r from-black via-black to-gray-800"></div>
            </div>
            <div className="container mx-auto px-8">
                <Navbar/>
                <HomePage/>
                <ContractPage/>
                <TechnologyPage/>
            </div>

        </div>
    )
}
export default App;





