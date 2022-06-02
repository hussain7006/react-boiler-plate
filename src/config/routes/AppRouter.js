
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Layout from "../../screens/layout/Layout";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Layout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;