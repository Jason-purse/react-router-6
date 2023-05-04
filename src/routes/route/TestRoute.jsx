import {NavLink, Route, Routes, Outlet, useLocation} from "react-router-dom";
import B from "./b";
import A from "./a";
import C from "./c";
import React, {useEffect, useState} from "react";
import Layout from "./layout";
import Aaa from "./aaa";

export default function TestRoute() {
    let [state, setState] = useState(1)
    useEffect(() => {
        console.log(state)
    })
    return (
        <div>
            <nav>
                <NavLink to={"a"} onClick={event => setState(state + 1)}>a</NavLink>{"       "}|{"       "}
                <NavLink to={"b"} onClick={event => setState(state + 1)}>b</NavLink>{"       "}|{"       "}
                <NavLink to={"c"} onClick={event => setState(state + 1)}>c</NavLink>{"       "}|{"       "}
                <NavLink to={"aaa"} state={{text: "aaa 链接"}}>aaa(layout 路由之下的动作)</NavLink>
            </nav>
            <hr/>
            <Routes>
                {/*<Route index element={*/}
                {/*    <main style={{padding: "1rem"}}>*/}
                {/*        <p>index routes</p>*/}
                {/*    </main>*/}
                {/*}/>*/}
                <Route element={<Layout />} >
                        <Route path="/aaa" element={<Aaa />} />
                </Route>
                <Route path="a" element={<A/>}/>
                <Route path="b" element={<B/>}/>
                <Route path="c" element={<C/>}/>
            </Routes>
            <Outlet/>
        </div>
    )

}