

// function name(a, ...args){
//     console.log(a, args)
// }

// name(1, 2, 3, 4, 5);

// ------------------------------------------

// var x = 10;

// function name1(){
//     console.log(x); // undefined
//     var x = 20; // it will be hoisting in the block scope
// }

// name1();


// -----------------------------
// console.log(name); // ""
// var name = "Anil";



// -----------------------------
// async function foo(){
//     return "Hello World";
// }
// let x = await foo();
// console.log(x)


// -----------------------------
// let ans = (x == true) ? 3: y == true ? false: z == true ? false : true; 

// async function fetchData(url){

//     try {
//         let res = await fetch(url, {
//             method: 'GET',
//         });
//         let data = await res.json()

//         data.forEach(item => {
//             console.log("name", item.name)
//         });

//     } catch (error) {
        
//     }

// }


// fetchData("https://jsonplaceholder.typicode.com/users");

// ------------------------------------
// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
 
// console.log("Employee=> ", employee);
// let newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);
 
// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);


// let arr = [1, 2, 3, 4, 5];
// let newArr = JSON.parse(JSON.stringify(arr));
// newArr[1] = 20;

// console.log(arr)
// console.log(newArr)


// function name(){
//     var x = 2;
//     return function name1(){
//         var y  = 4;
//         return function name2(){
//             return x+y;
//         }
//     }
// }

// console.log(name()());
// let n = name();
// console.log(n());
// console.log(n());



// console.log(a)
// console.log(b)
// var a = b = 5;



// let a;
// console.log(a);


// function foo(){
//     console.log(this.name);
// }

// const foo1 = () => {
//     console.log(this.name);
// }

// foo.call({name: 'Anil'});
// foo1.call({name: 'Anil'});


// console.log(document);


// if(true){
//     var a = 10;
// }
// console.log(a); // 10

// const pr = new Promise((rej, res) => {
//     console.log('hello');
// })

// console.log(pr);
// console.log(typeof pr);


// let xw = 10;
// var chec = 300;

// function name(){
//     console.log(x);
//     var x = 20;
// }
// name();
// console.log(x);


// var a = 10;
// var a = 20;
// console.log(a);


// console.log(b);
// let b = 10;



// const a1 = document.getElementsByClassName('h1'); // return HTMLcolletion
// const a2 = document.querySelectorAll('.h1') // return  Nodelist
// console.log(a1);
// console.log(a2);


// function name(){
//     a = 10;
//     console.log(a);
// }

// name();
// console.log(a);


// console.log(0123);


// foo();
// var foo = 10;

// function foo(){
//     console.log('calling foo');
// }

// foo();


// let anil = 0;
// var anil = 0;


// function name(){
//     var a  = 0;
//     return function name1(){
//         return a;
//     }
// }

// const b = name();
// b();
// b();



// for(var i = 0; i < 4; i++){
//     function name(x){
//         setTimeout(() => {
//             console.log(x);
//         }, 1000 * x)
//     }
//     name(i);
// }


// setTimeout(()=> {
//     console.log('timeout');
// }, 0)

// Promise.resolve().then(() => console.log('resolved'));
// console.log('anil');


// async function foo(){
//     let ans = await "elo";
//     return ans;
// }

// const res = foo();
// console.log(res);


// function foo(){
//     console.log("foo");
// }

// const val = new foo();
// console.log(val);
// // val();


// const obj = {
//     user1: 'anil',
//     user2: 'sunil',
// }

// let user = {...obj};
// console.log(user);
// let {user1, user2} = obj;
// console.log(user1, user2)


// let name = "Hello"; 
// let hello = "Hello"; 
  
// function salutation() {  
//     let name = "Aayush";  
//     console.log(`${hello} ${name}!`);  
// }
// salutation()


// const user = {
//     name: 'anil',
//     add: {
//         ad1: 'x',
//         ad2: 'y',
//     }
// }

// const user1 = {...user, address: {...user.add}};
// user1.name = 'sunil';
// user1.address.ad1 = 'aleo';
// console.log(user);
// console.log(user1);





// ------------------------------------------------
// function foo(){
//     console.log('anil');
// }
// let foo1 = new foo(); // object dega

// function foo(){
//     console.log('anil');
//     return 12;
// }
// let foo1 = new foo(); // object dega
// console.log(foo1);

// function foo(){
//     console.log('anil');
//     return [12, 10];
// }
// let foo1 = new foo(); // array dega
// console.log(foo1);

// function foo(){
//     console.log('anil');
//     return {user: 'name'};
// }
// let foo1 = new foo(); // object dega {user: name}
// console.log(foo1);
// ------------------------------------------------




// function computeAmount() {

//     let amount = 0;

//     function lacs(val){
//         console.log('lc')
//         val *= 100000;
//         amount += val;
//         return {lacs, cr, value};
//     }
//     function cr(val){
//         val *= 10000000;
//         amount += val;
//         return {cr, lacs, value};
//     }

//     function value(){
//         console.log('amount', amount)
//         return amount;
//     }

//     return {lacs, cr, value};
// }


// console.log(computeAmount().cr(10).lacs(10).lacs(10).value())
// console.log(computeAmount().lacs(15).cr(5).cr(2).lacs(20).cr(7).value())


// ------------------------------------------------


// let dot = document.createElement('div');
// dot.style.height = "20px";
// dot.style.width = "20px";
// dot.style.border = "2px solid red";
// dot.style.position = "relative";
// dot.style.position = "absolute";

// console.log(window)



// document.addEventListener('mouseover', (e) => {
//     dot.style.top = `${e.y}px`;
//     dot.style.left = `${e.x}px`;
//     console.log(e)
// })


// document.body.appendChild(dot);/

// ------------------------------------------------





// function x(val){
//     return function y(val1){
//         return val*val1;
//     }
// }

// const valX = x(2);
// console.log(valX(3), valX(4));

// ------------------------------------------------


// var val = 10;
// function x(){
//     let val = 100;
//     console.log(this.val);
// }   

// (() => {
//     let val = 100;
//     console.log(this.val);

// })()

// x();

// ------------------------------------------------
// var length = 10;

// function fn(){
//     console.log(this.length);
// }

// const obj = {
//     length: 5,
//     methods: function(fn){
//         fn();
//         arguments[0]();
//     }
// }


// obj.methods(fn, 1);

// ------------------------------------------------


// function fn(){
//     console.log(this.length);
// }

// fn()

// console.log(1);
// setTimeout(function(){
//     console.log('2');
// }, 1000)
// setTimeout((function(){
//     console.log('3');
// })(), 0)
// console.log(4);
// ------------------------------------------------



// let newArr = [];
// function flat(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             flat(arr[i]);
//         }else{
//             newArr.push(arr[i]);
//         }
//     }
// }


// let arr = [1, 2, [3, 4, [5, 6]]];
// flat(arr);

// console.log(arr);
// console.log(newArr);


// -------------------------------------

// let a = 'string';
// console.log(a);

// function str(){
//     console.log('str');
// }
// String.prototype.value = function(){
    
// }
// console.log(str.value())




// -------------------------------------

// let arr = [2,3,3,2,7,8,9];

// function count(arr){
//     let obj = {};

//     for(let i = 0; i < arr.length; i++){
//         if(obj[arr[i]] == 1){
//             obj[arr[i]]++;
//         }else{
//             obj[arr[i]] = 1;

//         }
//     }
//     console.log(obj);
// }



// count(arr);


// -------------------------------



function ani(cb){
    cb(() => {

    })
}


ani((cb) => {
    cb(()=> {
        
    })
})