import { Route, Routes } from "react-router-dom";

// page imports
import Schedules from './views/pages/Schedules'
import WeekSchedule from './views/pages/WeekSchedule'



const AppRoutes = () => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Schedules/>}/>
                <Route path="weekschedule/:id" element={<WeekSchedule/>}/>
            </Routes>
        </div>
    )
}

export default AppRoutes;