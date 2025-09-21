import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/*
//it is not a good practice to import like this
import * as booksData from './App';
*/

/*
import bestYoutuber, {favBook, bestBooksName} from './App';
*/






/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 20 IMPORT AND EXPORT
ReactDOM.render(
  <>
    <ol>
      <li> {bestYoutuber} </li>
      <li> {favBook} </li>
      <li> {bestBooksName()} </li>
    </ol>
  </>,
  document.getElementById('root')
);
*/


/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 20 IMPORT AND EXPORT
ReactDOM.render(
  <>
    <ol>
      <li> {booksData.default} </li>
      <li> {booksData.favBook} </li>
      <li> {booksData.bestBooksName()} </li>
    </ol>
  </>,
  document.getElementById('root')
);
*/


ReactDOM.render(
  <App />,
  document.getElementById('root')
)





