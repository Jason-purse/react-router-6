let e = React.createElement;
class App extends React.Component {

    componentDidMount() {
        console.log("组件将要挂载")
    }

    render() {
        return e("button",{onClick: () => {
                console.log("你好呀 !!!")}},"click me")
    }
}

console.log("invoke")
ReactDOM.render(e(App),document.getElementById("app"))
