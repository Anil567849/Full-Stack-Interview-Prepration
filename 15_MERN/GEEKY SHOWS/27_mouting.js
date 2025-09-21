

export class App extends Component{

    // life cycle flow in class based component
    // constructor --> getderivedstatefromprops --> render --> componentDidMount

    constructor(props){
        super(props);
        console.log("constructer")
    }

    static getderivedstatefromprops(props, state){
        console.log('getderivedstatefromprops caleed', props, state);
        return null;
    }
    
    
    componentDidMount(){
        console.log('componentDidMount caleed');

    }


    render(){
        console.log("render");
        return <h1>hlo</h1>
    }

}