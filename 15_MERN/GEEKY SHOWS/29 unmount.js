
// run this code in index.js to destroy some component; 
// RenderDOM.unmountComponentAtNode(document.getElementById("root"));

export class App extends Component{

    componentDidMount(){
        console.log('componentDidMount caleed');

    }


    // call when some comopnent will remove or destroy by you 
    componentWillUnmount(){
        console.log("unmount")
    }

    render(){
        console.log("render");
        return <h1>hlo</h1>
    }

}