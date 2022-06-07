
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Layout from "../../screens/layout/Layout";
import SignUp from "../../screens/SignUp";
import LogIn from "../../screens/LogIn";
import Home from "../../screens/Home";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home/:id/*" element={<Layout />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<LogIn />} />
                {/* <Route path="/" element={<Home />} /> */}

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;