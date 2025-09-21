import React from "react";
import add, {mul, divi, sub} from './cal.js';

function App()
{
  return (
    <>
    <ol>
      <li>add is {add(14230, 10)}</li>
      <li>mul is {mul(12340, 10)}</li>
      <li>divi is {divi(40, 3)}</li>
      <li>sub is {sub(40, 3)}</li>
    </ol>
  </>
  );
}


export default App;





