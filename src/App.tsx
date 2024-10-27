import * as React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";


const App: React.FC = () => {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selectionb:g-cyan-300 selection:text-cyan-900 pl-4 pr-5 lg:pl-16 lg:pr-5">
            <div className="flixed top-0 -z-10 h-full w-full"></div>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-gradient-to-r from-black via-black to-gray-800"></div>
            <div className="container mx-auto px-8"></div>
            <Navbar/>
            <HomePage/>
        </div>
    )
}
export default App;









