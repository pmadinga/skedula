import { Route, Routes } from "react-router-dom";

// page imports
import Home from './views/pages/Home'

import SiteHeader from './views/components/SiteHeader'

const AppRoutes = () => {
    return(
        <div>
            <Routes>
                <SiteHeader/>
                <Route exact path="/" element={<Home />}/>
            </Routes>
        </div>
    )
}

export default AppRoutes;