import React, { Suspense } from 'react'


// We can implement code splitting using React.lazy() and Suspense;

function G_CodeSplitting() {

    // if want to dealy MyComponent
    const a = () => import('./components/G_CodeSplittingComponent');
    const MyComponent = React.lazy(() => delayedLoader(a, 2000));

    
    // const MyComponent = React.lazy(() => import('./components/G_CodeSplittingComponent'));
    return (
        <div>
            <h1>Code splitting</h1>
            {/* Use Suspense to show a fallback while the component is loading */}
            <Suspense fallback={<div>Loading...</div>}>
                <MyComponent />
            </Suspense>
        </div>
    )

}

// This function is just to delay MyComponent 
type com = Promise<{ default: React.ComponentType<any> }>;
function delayedLoader(componentImport: () => com, delay: number = 1000): com {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(componentImport());
      }, delay);
    });
  }
  

export default G_CodeSplitting



/* 
Code splitting in React is a technique used to optimize the performance of an application by breaking down the code into smaller chunks that can be loaded on demand. This reduces the initial load time and improves the overall user experience, especially in large applications.

Why Use Code Splitting?
Improved Performance: By splitting your code, you can load only the necessary parts of your application at a time, reducing the amount of JavaScript that needs to be downloaded and executed on the initial page load.
Faster Load Times: Users can interact with your application faster because the browser doesn't have to wait for the entire JavaScript bundle to load.
Better User Experience: As users navigate through your application, additional code can be loaded dynamically, making the app feel more responsive.
*/