import { useState, createContext, useContext } from "react";

const UserContext = createContext("");

function B_ContextAPI() {
  const [name, setName] = useState("Anil Kumar");

  return (
    <UserContext.Provider value={name}>
      <h1>{`Hello ${name}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const name = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${name} again!`}</h2>
    </>
  );
}

export default B_ContextAPI


/*
The Context API in React is a powerful feature that allows you to share state and other values across different components in your application without the need to pass props manually through every level of the component tree. This is particularly useful for managing global state or common data that many components need access to.

Key Concepts of Context API
1. Context: A context is an object created using React.createContext(). It contains a Provider and a Consumer.

2. Provider: The Provider component is used to wrap parts of your component tree that need access to the context's value. The Provider accepts a value prop, which can be any data (state, functions, objects, etc.) you want to share.

3. Consumer: The Consumer component is used by any component within the Provider to access the context's value. However, in modern React, it's more common to use the useContext hook to access context values.

useContext Hook: This hook allows functional components to consume the context directly without needing a Consumer component. It simplifies accessing context values.
*/