import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Cards';
import reportWebVitals from './reportWebVitals';
// import Sdata from './Sdata';
import App from './App';


/*
// function NetflixCards(val, index, arr)
function NetflixCards(val){
  return (
    <Card 
          key = {val.id}
          imgSrc={val.imgSrc}
          title={val.title}
          serialName={val.serialName}
          link={val.link}
    />
  );
}
*/
/*
ReactDOM.render(
  <>
    {/* <Card imgSrc={Sdata[0].imgSrc}
          title={Sdata[0].title}
          serialName={Sdata[0].serialName}
          link={Sdata[0].link}
    />
    <Card imgSrc={Sdata[1].imgSrc}
          title={Sdata[1].title}
          serialName={Sdata[1].serialName}
          link={Sdata[1].link}
    /> *//*}

    {Sdata.map(NetflixCards)}

  </>,
  document.getElementById('root')
);

*/




ReactDOM.render(
  <App />,
  document.getElementById("root")
);












reportWebVitals();
