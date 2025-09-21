import React from 'react';


class Students extends React.Component {
    contructor(props){
        super(props);

        // This binding is necessary to make `this` work in the callback
        // this keyword ka use krne ke liye bind kre pehle 
        this.handleClick = this.handleClick.bind(this);
        

        // create state
        this.state = {
            name : "Shiv",

            // put props into roll and now you change change this value
            roll : this.props.roll
        };
    }






    

    handleClick  = () => {
        console.log("clicked", this);


        //changing the state
        //using object
        this.setState({name : "new Anil", roll : "102"});

        //using function
        this.setState(function (state, props){
            console.log(state);
            console.log(props);
        })
    }


    render(){
        <>  
            <p>naam {this.name} </p>
            <Button onclick={handleClick}>hlo</Button>
        </>
    }

}
