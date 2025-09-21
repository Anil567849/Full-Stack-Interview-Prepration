import React from 'react'


const data = [
    'a', 'b', 'c', 'd', 'e',
]

function E_Keys() {
  return (
    <div>
        <ul>
        {
            data.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        }
        </ul>
    </div>
  )
}

export default E_Keys


/*
In React, keys are special string attributes you need to include when creating lists of elements. They play a crucial role in identifying which items in the list have changed, been added, or removed, helping React to optimize the rendering process, it helps while reconcilation process when some element has to be checked.
*/