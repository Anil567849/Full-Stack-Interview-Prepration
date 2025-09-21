export class App extends Component {
//   constructor
//   getderivedstatefromprops;
//   shouldComponentUpdate;
//   render;
//   getSnapshotBeforeUpdate

  constructor(props) {
    super(props);
    console.log("constructer");

    this.state = {
        roll = this.props.roll
    }

  }

  static getderivedstatefromprops(props, state) {
    console.log("getderivedstatefromprops caleed", props, state);
    if(props.roll !== state.newRoll){
        return {roll : state.newRoll}
    }
    return null;
  }

  //weather or not you want to render your component
  shouldComponentUpdate(nextProps, nextState){
      if(this.state.roll < 100){
          return true; // rerender
      }
      console.log(nextProps, nextState);
      return false; // don't rerender
  }



//   it will call before DOM update
  getSnapshotBeforeUpdate(prevProps, prevState){

  }

  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log("componentDidMount caleed");
  }

  render() {
    console.log("render");
    return <h1>hlo</h1>;
  }
}
