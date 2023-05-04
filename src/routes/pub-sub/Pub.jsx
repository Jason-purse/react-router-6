import PubSub from 'pubsub-js'
import {useEffect, useState} from "react";

export default function Pub(props) {
    useEffect(() => {
        console.log("props children: " + props.children)
    })
    let [state, setState] = useState("")
    return (
        <div>
            <input type="text" onChange={(event) => {
                setState(event.target.value)
            }}/>
            <button onClick={(event) => {
                PubSub.publish("publish", state)
            }}>点击发送
            </button>
        </div>
    )
}