import {Routes,Route} from 'react-router-dom'
import Shops from "./shops";
import React from "react";
import {Outlet} from "react-router-dom";
export default function Dashboard(props) {
    return (
        <div>
            <h1>dashboard</h1>
            <Routes>
                <Route path="" element={<Shops />}/>
            </Routes>
            <Outlet />
        </div>
    )

}
