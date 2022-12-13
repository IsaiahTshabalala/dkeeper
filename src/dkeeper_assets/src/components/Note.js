import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note({id, title, content, onDelete}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}><DeleteIcon /></button>
    </div>
  );
} // function Note(props)

export default Note;
