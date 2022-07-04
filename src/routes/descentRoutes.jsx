import React from "react";
import {Route,Routes} from 'react-router-dom'
import Dashboard from "./descent-routes/dashboard";

export default function DescentRoutes(props) {

    return (
        <div>
            <h1>这里主要探索  后辈路由的使用</h1>
            <Routes>
                <Route path="*" element={<Dashboard />} />
            </Routes>
        </div>
    )
}
