import PubSub from "pubsub-js";
import {useEffect, useState} from "react";


export default function Sub() {
    let [state,setState] = useState("")
    // componentDidMount / componentDidUpdate / ...willUnmount ...
    useEffect(() => {
        console.log("执行effect")
        let token = PubSub.subscribe("publish",(_,data) => {
            setState(data)
        })
        return () => {
            console.log(`取消订阅 token${token}`)
           PubSub.unsubscribe(token)
        }
    },[])
    return (
        <div>
            <p>显示内容</p>
            <p>{state}</p>
        </div>
    )
}