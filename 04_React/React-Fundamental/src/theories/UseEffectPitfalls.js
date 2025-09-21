// 1. Missing Dependency Array
useEffect(() => {
  // This will run on every render
});


// 2. Incorrect Dependencies
useEffect(() => {
  // Dependency on 'count' but 'count' is not included
  console.log(count);
}, []); // `count` should be in the dependency array


// 3. Infinite Loops
useEffect(() => {
  // Setting state that triggers re-render
  setCount(count + 1);
}, [count]); // Causes an infinite loop


// 4. Cleanup Function Misuse
useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);
  // Missing cleanup
}, []);


// 5. Effect Dependencies and Performance
useEffect(() => {
  // Expensive operation
}, [count, setCount, someFunction]); // Avoid unnecessary dependencies


// 6. Ignoring Effect Dependencies
useEffect(() => {
  // Incorrect assumption about dependency updates
  fetchData();
}, []); // Should include necessary dependencies