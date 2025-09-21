// Q. How does React handle events differently from vanilla JavaScript?


// 1. Synthetic Events
// React: Uses a Synthetic Event system that wraps native browser events. This system provides a consistent interface across different browsers and normalizes event properties.
const MyComponent = () => {
    function handleClick(event) {
        console.log(event.nativeEvent); // Native browser event
        console.log(event.type); // Synthetic event property
    }
    
    <button onClick={handleClick}>Click me</button>
}

// Vanilla JavaScript: Directly interacts with native DOM events.
document.querySelector('button').addEventListener('click', function(event) {
    console.log(event); // Native browser event
  });


// 2. Event Binding
// React: Handles events using camelCase syntax for event names (e.g., onClick, onChange). Event handlers are passed as props and are automatically bound to the component instance.
<button onClick={this.handleClick}>Click me</button>


// Vanilla JavaScript: Uses lowercase event names (e.g., click, change). Event handlers are often bound using addEventListener and need manual binding for context.
document.querySelector('button').addEventListener('click', function() {
    // Handle click
  });


//   3. Event Delegation

// React attaches listeners at the root level

// Vanilla JavaScript: Requires setting up individual event listeners for each element, which can be less efficient, especially for dynamic elements.
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      // Handle click
    });
});


// 4. Event Handling Optimization
// React: Provides built-in optimizations for event handling, such as event pooling. The Synthetic Event system reuses event objects for performance benefits.

// Vanilla JavaScript: Does not provide built-in pooling or optimization mechanisms for event handling.