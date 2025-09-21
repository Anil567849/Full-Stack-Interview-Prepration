
import React from 'React';


export class App extends Component{
    constructor(props){
        super(props);

        //create state
        this.state = {
            val : ""
        }




        this.textInputKoFocusKre = React.createRef();

        this.textInput = React.createRef();

    }

    //useEffect h
    ComponentDidMount = () => {

        // by default it will focus on input when page reload
        // console.log(this.textInputKoFocusKre);
        this.textInputKoFocusKre.current.focus();
    }


    handleForm = (e) =>{
        e.preventDefault();
        // console.log(this.textInput);
        this.setState({val : this.textInput.current.value});

    }




    render(){
        return (
            <><form onSubmit={handleForm}>
                <input ref={this.textInputKoFocusKre}>name</input>
                <input ref={this.textInputKoFocusKre}>email</input>
                <input >password</input>
                <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}