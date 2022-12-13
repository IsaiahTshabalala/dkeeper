import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setNote] = React.useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  function handleNoteChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    if (field === "title") {
      // Update title
      setNote((previous) => ({ ...previous, title: value }));
    } else {
      // Update title
      setNote((previous) => ({ ...previous, content: value }));
    }
  } // function handleNoteChange(event)

  function handleClick(event) {
    props.addNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
    collapse();
  } // function handleClick()

  function expand(){
    setIsExpanded(true);
  }

  function collapse(){
    setIsExpanded(false);
  }

  const { title, content } = note;

  return (
    <div>
      <form className="create-note">

        <input
          name="title"
          placeholder={isExpanded? "Title": "Take a note"}
          value={title}
          onChange={handleNoteChange}
          onClick={expand}
        />

        {
          isExpanded &&
          <>
            <textarea
              name="content"
              placeholder="Take a note..."
              rows="3"
              value={content}
              onChange={handleNoteChange} />

            
            <Zoom in={isExpanded}>
              <Fab onClick={handleClick}>
                <AddIcon />
              </Fab>
            </Zoom>
            
          </>
        }
        
      </form>
    </div>
  );
}

export default CreateArea;
