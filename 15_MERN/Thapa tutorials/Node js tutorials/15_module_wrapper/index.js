
/*
    whatever code we are writing, node js automatically put your code into iffe function 
    that's why your variable bacomes private - because now's it is in the iffe function (inside function)
    iffe function already have some paramters by default that's why u are able to access [require, exports etc.] without installing it 
*/
(function (exports, require, module, __filename, __dirname) {  


});


// iffe function 
(function(){
  // all your code here
  var foo = function() {};
  window.onload = foo;
  // ...
})(); // call ho ra h ()