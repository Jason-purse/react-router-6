import {useLocation, Outlet, Routes,Route} from "react-router-dom";
import React,{useEffect} from "react";

export default function Layout(props) {
    let location = useLocation()
    useEffect(() => {
        console.log(`location params ${JSON.stringify(location)}`)
    })

    return (
        <div>
            <p>layout route</p>
            {(props.children?.length)}
            <Outlet  />
        </div>
    )
}