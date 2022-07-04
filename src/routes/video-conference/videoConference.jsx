import JitsiMeeting from "@jitsi/react-sdk/lib/components/JitsiMeeting";
import React, {useRef} from "react";
import {NavLink, useLocation, useNavigate} from "react-router-dom";

let count = 0;
export default class VideoConference extends React.Component {
    render() {
        // if(window.location.href.indexOf("loaded") < 0) {
        //     window.location = window.location.href + "?loaded=1"
        // }
        // let navigate = useNavigate()

        count ++;
        console.log(`${count}`)
        return (
            <div key={count} style={{
                width: "100%",
                height: "1000px"
            }}


            >
                <NavLink to="/descent" >点击返回</NavLink>
                {/*<button onClick={event => navigate("/descent")}>返回,点击路由再过来</button>*/}
                <JitsiMeeting
                    key={count}
                    domain = { "meet.jit.si" }
                    roomName = "PleaseUseAGoodRoomName"
                    configOverwrite = {{
                        startWithAudioMuted: true,
                        disableModeratorIndicator: true,
                        startScreenSharing: true,
                        enableEmailInStats: false
                    }}
                    interfaceConfigOverwrite = {{
                        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
                    }}
                    userInfo = {{
                        displayName: 'YOUR_USERNAME' + count
                    }}
                    onApiReady = { (externalApi) => {
                        // here you can attach custom event listeners to the Jitsi Meet External API
                        // you can also store it locally to execute commands
                        console.log(externalApi.getIFrame())
                        console.log(externalApi)
                    } }

                    getIFrameRef = { (iframe) => {
                        iframe.style.height = "100%";
                        console.log(`iframe Id ${iframe.id}`)
                    }
                    }
                />
            </div>
        )
    }

    componentWillUnmount() {
        Window.JitsiMeetExternalAPI = undefined
    }
}
