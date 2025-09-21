import React, { useEffect, useState } from 'react'
interface t {
    id: number;
    title: string;
  }

function H_CustomHooks() {

    const data = useFetch("https://jsonplaceholder.typicode.com/todos");
    
    return (
      <>
        {data &&
          data.map((item: {id: number, title: string}) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );
}




function useFetch(url: string): t[] | null {
    const [data, setData] = useState<t[] | null>(null);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data: t[]) => setData(data)) // assume data is an array of t
        .catch((error) => {
          console.error('Error fetching data:', error);
          setData(null); // set to null if there's an error
        });
    }, [url]);
  
    return data;
  }

export default H_CustomHooks



/*

Custom Hooks in React are a powerful way to extract and reuse logic across multiple components. They allow you to encapsulate logic that involves React hooks (like useState, useEffect, etc.) into reusable functions, making your components more modular and easier to manage.

What Are Custom Hooks?
A custom hook is essentially a JavaScript function that starts with the prefix "use" and can call other hooks within it. It allows you to abstract away complex logic from your components and reuse it wherever needed.

Custom hooks follow the same rules as React hooks, such as the "Rules of Hooks," which include:
Only call hooks at the top level.
Only call hooks from React function components or other custom hooks.

Why Use Custom Hooks?
Custom hooks are useful when:
You have repetitive logic across components: Instead of duplicating code, you can extract that logic into a custom hook.
You want to keep your components clean and focused: By moving complex logic out of the component and into a custom hook, your component can focus on rendering the UI.
You need to share logic between components: If multiple components need the same behavior (e.g., data fetching, form handling), a custom hook is an ideal way to share that logic.

*/