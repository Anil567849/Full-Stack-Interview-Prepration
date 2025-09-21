import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';


function App() {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // console.log(note);

    setAddItem( (oldValue) => {
      return [...oldValue, note];
    });
  };

  const onDelete = (id) => {
    console.log('clicked app.js ' + id);

    setAddItem( (oldValue) =>

      oldValue.filter( (val, idx) => {
        return id != idx;
      })

    );
    
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {
        addItem.map( (val, idx) => {
          return(
            <Note 
              key={idx}
              id={idx}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })
      }
      <Footer />
    </>
  );
}

export default App;
