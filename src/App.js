import logo from './logo.svg';
import './App.css';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import DescentRoutes from "./routes/descentRoutes";
import Expreses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import VideoConference from "./routes/video-conference/videoConference";
import React from "react";
import StyleHandle from "./routes/style-handle/style-handle";


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
                <Link to={`/api/123`}>外部请求</Link>
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
                <Route path="*" element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here !!!</p>
                    </main>
                }/>
                <Route path="/videoConference/*" element={<VideoConference />}/>
                <Route path="hello" element={<StyleHandle/>} />
            </Routes>
            <Outlet/>
        </div>
    );
}

export default App;
