
import React from 'React';


export class App extends Component{
    constructor(props){
        super(props);

        this.backRef = null;


        //element will come here when you send element from jsx
        this.setBackRef = (element) => {
            this.backRef = element;
        }

    }

    //useEffect h
    ComponentDidMount = () => {

        // use whatever you want 
        // now this.backRef contains a element 
            if(this.backRef){
                this.backRef.focus();
            }
    }



    render(){
        return (
            <><form onSubmit={handleForm}>
                <input ref={this.backRef}>name</input>
                <input ref={this.backRef}>email</input>
                <input >password</input>
                <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}