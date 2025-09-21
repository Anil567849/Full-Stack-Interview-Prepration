

// This is the HOC
function withExtraInfo(WrappedComponent: any) {

  return function EnhancedComponent(props: any) {
    // You can add extra props or logic here
    const extraInfo = "I'm an extra prop";

    return (
      <div style={{background: 'red'}}>
        <WrappedComponent extraInfo={extraInfo} {...props} />
      </div>  
    )
  };

}

// This is a regular component
function MyComponent({ extraInfo, name }: {extraInfo: string, name: string}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{extraInfo}</p>
    </div>
  );
}

// Using the HOC to enhance MyComponent
export const EnhancedComponent = withExtraInfo(MyComponent);





/*
Theory:
An HOC is a function that takes a component as an argument and returns a new component with enhanced or modified behavior.

Key Concepts of HOCs
1. Pure Function: An HOC is a pure function with no side effects. It doesn't modify the original component but returns a new component with added functionality.

2. Composability: HOCs are great for code reuse. You can compose them to add multiple layers of functionality to a component.

3. Props Manipulation: HOCs can inject, modify, or remove props that are passed to the wrapped component.

4. Wrapper Components: The new component created by the HOC wraps the original one, potentially adding additional behavior, such as managing state or enhancing the UI.

Example:
import React from "react";
const MyComponent = ({ name }) => {=
  return <h1>Hello, {name}!</h1>;
};

// Memoize the component in HOC
export default React.memo(MyComponent);
*/