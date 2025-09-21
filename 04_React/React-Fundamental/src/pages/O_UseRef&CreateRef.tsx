import { Component, createRef, RefObject, useEffect, useRef } from "react";





// 1. UseRef 
export default function MyComponent1() {
    const inputRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      // Focus the input element when the component mounts
      if(inputRef && inputRef.current) inputRef.current.focus();
      
    }, []);
  
    return <input ref={inputRef} type="text" />;
}
  





// 2. CreateRef 
class MyComponent extends Component<{ children: React.ReactNode}> {
    inputRef: RefObject<HTMLInputElement>;
    constructor(props: any) {
      super(props);
      this.inputRef = createRef();
    }
  
    componentDidMount() {
      // Focus the input element when the component mounts
      if(this.inputRef && this.inputRef.current) this.inputRef.current.focus();
    }
  
    render() {
      return <input ref={this.inputRef} type="text" />;
    }
}
  
  export {MyComponent};












/* Component Type:

useRef: Designed for functional components.
createRef: Designed for class components but can be used in functional components, though it’s less optimal in functional contexts.

Reference Persistence:
useRef: Returns the same ref object across renders, making it stable for storing and referencing mutable data.
createRef: Returns the same ref object across renders in Class Components but in funcational Creates a new ref object on every render, which can lead to issues if you expect the ref to persist.

Re-rendering:
useRef: Updating the current property does not trigger a re-render.
createRef: Similar in class components, where updating the ref does not trigger a re-render, but in functional components, the ref itself is recreated each render.


When to Use Which:
useRef: Preferred in functional components for both DOM references and storing mutable data that doesn't cause re-renders.
createRef: Best suited for class components where you need a reference that persists across renders. */