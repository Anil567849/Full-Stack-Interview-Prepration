/*
PropTypes is a feature in React that allows you to perform runtime type checking on the props that are passed to your components. It helps ensure that components receive the correct type of data, which can prevent bugs and make your code more predictable and easier to maintain.

How to use it:
npm install prop-types
*/


import PropTypes from 'prop-types';

function MyComponent({ name, age, isStudent }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool,
};

MyComponent.defaultProps = {
  isStudent: false,
};

export default MyComponent;

/*
Common PropTypes Validators
Here are some of the most common validators provided by PropTypes:

PropTypes.string: Checks for a string.
PropTypes.number: Checks for a number.
PropTypes.bool: Checks for a boolean.
PropTypes.array: Checks for an array.
PropTypes.object: Checks for an object.
PropTypes.func: Checks for a function.
PropTypes.element: Checks for a React element.
PropTypes.node: Checks for anything that can be rendered (numbers, strings, elements, arrays, etc.).
PropTypes.oneOfType: Allows multiple types (e.g., PropTypes.oneOfType([PropTypes.string, PropTypes.number])).
PropTypes.shape: Checks for an object with a specific shape (e.g., PropTypes.shape({ name: PropTypes.string, age: PropTypes.number })).
*/