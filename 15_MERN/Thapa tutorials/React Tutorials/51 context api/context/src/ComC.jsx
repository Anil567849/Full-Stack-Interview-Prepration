import logo from './logo.svg';
import './App.css';
import { createContext, useContext } from 'react';
import ComA from './ComA';
import { FirstName, LastName } from './App';

// three step to implement contextApi 
// 1 = createContext();
// 2 = provider 
// 3 = consumer



/*

// CALLBACK HELL = SEE THIS CODE BECOMES A LOT CONFUSING 
// @@@@@@@@@@@@@@@@@@@@@ 
// 51 VIDEO 
const ComC = () => {
  return (

    <>
    // { must use function inside Consumer  }

    <FirstName.Consumer>
        {
            (fName) => {

                return (
                    <LastName.Consumer>
                        {
                            (lName) => {
                                return (
                                    <>
                                    <h1>HELLO, PUT DENT IN THE UNIVERSE</h1>
                                    <p>{fName}</p>
                                    <p>{lName}</p>
                                    </>
                                )
                                 
                            }
                        }
                    </LastName.Consumer>
                )
            }
        }

    </FirstName.Consumer>


    </>
  );
}

*/ 


// @@@@@@@@@@@@@@@@@@@@@@@@@ 
// LET'S SIMPLIFY ABOVE CODE 
// 52 VIDEO = USEHOOK 
const ComC = () => {

    // const fName = useContext(FirstName);
    // const lName = useContext(LastName);

    return (
    //     <>
    //         <h1>{fName}</h1>
    //         <h1>{lName}</h1>
                <h1>hello</h1>
    //     </>
    )

}

export default ComC;
