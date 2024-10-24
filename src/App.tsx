import * as React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage.tsx";


const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App;