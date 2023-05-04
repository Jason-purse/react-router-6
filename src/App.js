import './App.css';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import DescentRoutes from "./routes/descentRoutes";
import Expreses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import VideoConference from "./routes/video-conference/videoConference";
import React from "react";
import StyleHandle from "./routes/style-handle/style-handle";
import PubSubCom from "./routes/pub-sub/pub-sub";
import TestRoute from "./routes/route/TestRoute";


function App() {
    return (
        <div>
            <h1>Bookkeeper!</h1>
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
            }}>
                <Link to="/invoices">Invoices</Link> | {" "}
                <Link to="/expenses">Expenses</Link> | {" "}
                <Link to="/descent">Descent Routes</Link> | {" "}
                <Link to={`/videoConference`} >VideoConference</Link>   | {" "}
                <Link to={`/hello`} >style handle</Link>   | {" "}
                <Link to={`/many`}>路由探究</Link>  | {" "}
            </nav>
            <Routes>
                <Route path="descent/*" element={<DescentRoutes/>}/>
                <Route path="expenses" element={<Expreses/>}/>
                <Route path="invoices" element={<Invoices/>}>
                    {/*默认路由,也可以说叫做 index 路由*/}
                    {/*<Route index element = {*/}
                    {/*    <main style={{padding: "1rem"}}>*/}
                    {/*        <p>Select an invoice</p>*/}
                    {/*    </main>*/}
                    {/*}/>*/}

                    {/*默认路由*/}
                    <Route path="" element={
                        <main style={{padding: "1rem"}}>
                            <p>请选择一个invoice</p>
                        </main>
                    }/>
                    <Route path=":invoiceId" element={<Invoice/>}/>
                </Route>
                <Route path="/videoConference/*" element={<VideoConference />}/>
                <Route path="hello" element={<StyleHandle/>} />
                <Route path="pubsub" element={<PubSubCom />}/>
                <Route path="*" element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here !!!</p>
                    </main>
                }/>
                // 这就是为什么说一定要在path pattern使用 *,如何不使用*,当路径长于这个route 那么就无法匹配,使用* 通用匹配,那么就始终会走这个路由 ....
                <Route path="many/*" element={<TestRoute />} />
            </Routes>
            <Outlet/>
        </div>
    );
}

export default App;
