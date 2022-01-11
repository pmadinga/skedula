import { Route, Routes } from "react-router-dom";

// page imports
import Home from './views/pages/Home'



const AppRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default AppRoutes;