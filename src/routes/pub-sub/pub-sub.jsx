import Pub from "./Pub";
import Sub from "./Sub";

export default function PubSubCom (props) {
    return (
        <div style={{
            display: 'flex'
        }}>
            <div style={{
                flexGrow: 1
            }}>
                <Pub >你好</Pub>
            </div>
            <div style={{
                flexGrow: 1
            }}>
                <Sub />
            </div>
        </div>
    )
}