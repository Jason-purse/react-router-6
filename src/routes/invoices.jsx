import {getInvoices} from "../data";
import {NavLink, Outlet, useLocation, useSearchParams} from "react-router-dom";
import React from "react";

let count = 0;
export default function Invoices() {
    let invoices = getInvoices()
    let [searchParams, setSearchParams] = useSearchParams()
    let location = useLocation();
    return (
        <div style={{display: "flex"}}>
            <nav style={
                {
                    borderRight: "solid 1px",
                    padding: "1rem"
                }
            }>
                <h1>进入次数: {count++}</h1>
                <input type="text"
                       value={searchParams.get('filter') || ''}
                       onChange={(event) => {
                           let filter = event.target.value
                           if (filter) {
                               setSearchParams({filter})
                           } else {
                               setSearchParams({})
                           }
                       }}
                />
                {
                    invoices
                        .filter(invoice => {
                            let filter = searchParams.get('filter')
                            if (!filter) return true
                            let name = invoice.name.toLowerCase()
                            return name.startsWith(filter.toLowerCase())
                        })
                        .map((invoice) =>
                            // 当然也可以使用react 封装的一些dom 属性 ..
                            // 例如 className 指明这个元素使用的 样式
                            {
                                return <NavLink style={
                                    ({isActive}) => {
                                        return {
                                            display: "block",
                                            margin: "1rem 0",
                                            color: isActive ? "red" : ""
                                        }
                                    }
                                }
                                    // 同样当我们点击的时候我们可以将这个查询参数一并带过去 ...
                                    // 那么可以将NavLink 封装成具有这样能力的函数(也成为函数组件) ..
                                    // 这样 这些router 函数才有足够的能力进行调用
                                                to={`/invoices/${invoice.number}${location.search}`}
                                                key={invoice.number}
                                >
                                    {invoice.name}
                                </NavLink>
                            }
                        )
                }
            </nav>
            <Outlet/>
        </div>
    )
}
