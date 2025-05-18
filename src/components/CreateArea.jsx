import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, updateInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const newData = event.target.value;
    const name = event.target.name;

    updateInput((preValue) => {
      return {
        ...preValue,
        [name]: newData,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(newNote);
    updateInput({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="outerCreate">
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={newNote.content}
        />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
