import {useNavigate, useParams,useLocation} from "react-router-dom";
import {getInvoice, removeInvoice} from "../data";

export default function Invoice() {
    let {invoiceId} = useParams()
    //它类似useState ,但是它将路径中的查询参数保存到 State中 ..
    let invoice = getInvoice(parseInt(invoiceId,10));
    let navigate = useNavigate()
    let location = useLocation()
    return (
        <main style={{
            padding: "1rem"
        }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {`${invoice.name}: ${invoice.number}`}
            </p>
            <p>Due Date: {invoice.due}</p>
            <button
                onClick={() => {
                    removeInvoice(invoice.number);
                    // 这将导致父路由中的 index 路由激活 ..
                    navigate("/invoices" + location.search);
                }}
            >
                Delete
            </button>
        </main>
    )
}
