import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Aaa() {
    let location = useLocation()
    useEffect(() => {
        console.log(`location is ${JSON.stringify(location)}`)
    })

    return (
        <div>
            aaa
        </div>
    )
}