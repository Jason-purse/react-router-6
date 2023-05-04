import './style-handle.scss'
import React from "react";
import Request from "../../util/request/Request";

export default class StyleHandle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.requestData = this.requestData.bind(this)
    }


    requestData() {
        Request.get("/api/datas").then(data => {
            console.log(data)
            this.setState({data: data?.data || []})
        })
    }
    render() {
        return (<>
            <div className="hello">hello</div>
            <div className={'style-handle'}>layout</div>

            <button onClick={this.requestData}>点击请求数据</button>
            <p>数据结果</p>
            {this.state.data.map(el => <p key={el.value}>{el.value}</p>)}
        </>)
    }
}
