import logo from './logo.svg';
import './App.css';
// import Sdata from './Sdata';
// import Card from './Cards';

import Amazon from './Amazon';
import Netflix from './Netflix';

const favOTT = "Amazon";

// const  FavOTTPlatform = () => {
//   if(favOTT == "Amazon"){
//     return <Amazon />
//   }else{
//     return <Netflix/>
//   }
// }
 

const App = () => (
  <>
    //  <FavOTTPlatform />
    {favOTT == "Amazon" ? <Amazon/> : <Netflix/>}
  </>
);


/*
const App = () => (
  <>
  
    {Sdata.map( (val) => {


      return (
        <Card 
          key = {val.id}
          imgSrc={val.imgSrc}
          title={val.title}
          serialName={val.serialName}
          link={val.link}
        />
      );
    })}


  </>
);
*/
export default App;
