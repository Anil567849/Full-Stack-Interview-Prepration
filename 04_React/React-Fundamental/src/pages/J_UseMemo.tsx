import React from 'react'

import { useState, useMemo } from "react";

const J_UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[] | null>(null);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t: string[] | null) => {
        if (!t) {
          // Initialize as an empty array if t is null
          return ["New Todo"];
        }
        return [...t, "New Todo"];
      });
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos && todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default J_UseMemo



/*
The React useMemo Hook returns a memoized value.

Think of memoization as caching a value so that it does not need to be recalculated.

The useMemo Hook only runs when one of its dependencies update.

This can improve performance.

The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
*/