import React, { Component } from 'react';

// 1. Handling Errors in React Components Using Try/Catch in Event Handlers:
export default function MyComponent() {
  const handleClick = () => {
    try {
      // Code that might throw an error
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return <button onClick={handleClick}>Click Me</button>;
}


/*
----------------------------------------------------------------------------------
// 2. What Are Error Boundaries?
Error boundaries are implemented using class components.
They catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
They do not catch errors in event handlers.
*/
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can log the error to an error reporting service
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// You can wrap any part of your component tree with an error boundary:
function MyApp() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}


/*
Summary
Error boundaries are a way to catch errors in React components during rendering, lifecycle methods, and constructors.
They allow you to display a fallback UI instead of crashing the entire app.
Use try/catch blocks for handling errors in event handlers and asynchronous code.
Error boundaries are typically used to wrap large sections of your app or critical components to ensure that errors in one part of your app don't bring down the entire application.
*/