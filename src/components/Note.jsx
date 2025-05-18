import React,{useState} from "react";

function Note(props) {

  const [isClicked,showDetails]=useState(false);

  function handleDetails()
  {

    console.log("clicked");
    showDetails(!isClicked);
  }

  return (
    <div className="note" onClick={handleDetails}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className={`details ${isClicked ? "" : "hide"}`}>
          <p className="timeStamp">
            
            Date: {props.addedOn}
            <br />
            Time: {props.time}  
          </p>
        </div>
      <button
        onClick={() => {

          props.deleteNote(props.id);
        }}
      >



        DELETE
      </button>
    </div>
  );
}

export default Note;
