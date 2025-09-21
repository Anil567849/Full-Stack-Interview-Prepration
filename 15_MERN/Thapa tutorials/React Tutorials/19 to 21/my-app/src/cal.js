
/*
@@@@@@@@@@@@@@@@@@@@@@@@@@
21 VIDEO
const youtuber = "Thapa Technical";

const favBook = "Elon Musk";


function bestBooksName(){
  let nameOfBooks = "Rework, Zero to One";
  return nameOfBooks;
}

// by default export this 
export default youtuber;

export {favBook, bestBooksName};


*/





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// 22 VIDEO 
function add(a, b){
    let res = a + b;
    return res;
}


function mul(a, b){
    let res = a * b;
    return res;
}


function divi(a, b){
    let res = a / b;
    return res.toFixed(2);
}


function sub(a, b){
    let res = a - b;
    return res;
}


export default add;
export {mul, divi, sub};