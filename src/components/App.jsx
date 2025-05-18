import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([{title:"Guide",content:"Tap to check the note's timestamp."},{title:"Hover Me",content:"Hey!! Hover to focus this item."}]);

  function getInput(newNote) {
    updateNotes((preValue) => {
      return [...preValue, newNote];
    });
    // console.log(newNote);
  }

  function delNote(id) {
    console.log(id);

    

    updateNotes((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={getInput} />
        <hr />
        <div className="outerNote">
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteNote={delNote}
            addedOn={new Date().toLocaleDateString()}
            time={new Date().toLocaleTimeString()} 
          />
        );
      })}
    
      </div>
      <Footer />
    </div>
  );
}

export default App;
