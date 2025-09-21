


/*
Optimistic and pessimistic updates are two different strategies for {handling state updates} in React when interacting with a server or external data source. These strategies determine how the UI responds to actions that involve server communication, such as submitting a form or updating a database.

*/

import { useState } from "react";


/*

1. Optimistic Updates
Optimistic updates update the UI immediately after the user performs an action, assuming that the server will successfully process the request. If the server responds with an error, the UI is then reverted or adjusted accordingly.
*/

export const OptimisticUpdate = () => {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
          // Store the current value before optimistic update
          const previousLikes = likes;

        // Optimistically update the state
        setLikes(likes + 1);
    
        // Send the request to the server
        fetch('/api/like', { method: 'POST' })
        .then(response => {
            if (!response.ok) {
            // Revert the optimistic update if there's an error
            setLikes(previousLikes);
            }
        })
        .catch(() => {
            // Revert on network or other errors
            setLikes(previousLikes);
        });
};


  return (
    <div>
        <h1>Likes: {likes}</h1>
        <button onClick={handleLike}>Like Button</button>
    </div>
  )
}




// 2. Pessimistic updates delay updating the UI until after the server has successfully processed the request. The UI waits for confirmation before reflecting any changes.

export const PessimisticUpdate = () => {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        // Send the request to the server
        fetch('/api/like', { method: 'POST' })
          .then(response => {
            if (response.ok) {
              // Update the state only after the server confirms
              setLikes(likes + 1);
            }
          })
          .catch(error => {
            console.error("Failed to like the post:", error);
          });
      };


  return (
    <div>
        <h1>Likes: {likes}</h1>
        <button onClick={handleLike}>Like Button</button>
    </div>
  )
}







