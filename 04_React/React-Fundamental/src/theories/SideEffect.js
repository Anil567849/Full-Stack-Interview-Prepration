
// Q. How can you manage side effects in a React application?
/*
What is the side effect?
Side effects are operations in a React application that interact with the outside world or alter the application’s state in a way that is not purely functional. Examples include:

Fetching data from an API
Manipulating the DOM directly
Setting up subscriptions or timers
Writing to local storage
These operations are managed using hooks like useEffect in functional components or lifecycle methods in class components.

🎯 Real-world analogy
Think of your React component like a pure math function:
2 + 2 will always equal 4 — no matter what.
That’s like React rendering.
But if you call your friend on the phone while calculating,
that’s a “side effect” — it’s something extra happening outside the math.

🚀 Real-world React app example
Imagine a chat app:
You render a list of messages (pure render).
But you also need to:
Fetch messages from server ✅ side effect
Listen for new messages with WebSocket ✅ side effect
Scroll to the latest message ✅ side effect
Save last seen timestamp in localStorage ✅ side effect
*/


// 1. Using useEffect Hook
import React, { useEffect, useState } from 'react';
function MyComponent() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Fetch data on mount
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this runs once on mount



    // 2. With Dependencies: Runs the effect only when specific dependencies change.
  useEffect(() => {
    // Effect that depends on count
    console.log(`Count is ${count}`);
  }, [count]); // Runs when 'count' changes


//   3. Cleanup: Perform cleanup by returning a function from the effect.
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
  
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return <div>{data ? data.message : 'Loading...'}</div>;
}


// 2. Handling Asynchronous Operations
import React, { useEffect, useState } from 'react';
function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Empty dependency array

  if (loading) return <div>Loading...</div>;

  return <div>{data.message}</div>;
}


// 3. Managing Side Effects with External Libraries
import { useQuery } from 'react-query';
function MyComponent() {
  const { data, error, isLoading } = useQuery('fetchData', () =>
    fetch('https://api.example.com/data').then(res => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data.message}</div>;
}

// Redux-Saga or Redux-Thunk:
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
function fetchData() {
  return dispatch => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }))
      .catch(error => dispatch({ type: 'FETCH_DATA_ERROR', payload: error }));
  };
}


// 4. Using Context for Global Side Effects.
import React, { createContext, useContext, useEffect, useState } from 'react';
const MyContext = createContext();
function MyProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
}
function MyComponent() {
  const data = useContext(MyContext);
  return <div>{data ? data.message : 'Loading...'}</div>;
}



