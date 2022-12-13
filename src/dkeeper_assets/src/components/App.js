import React from "react";
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper";

function App() {
  const [notes, updateNotes] = useState([]);
  const [renderNotes, updateRenderNotes] = useState(true);

  async function addNewNote(newNote) {
    newNote = { id: uuidv4(), ...newNote};
    await dkeeper.createNote(newNote.id, newNote.title, newNote.content);
    updateNotes((previous) => [newNote, ...previous]);
    return Promise.resolve(newNote);
  } // function addNewNote(note)

  async function deleteNote(id) {
    await dkeeper.removeNote(id);
    updateRenderNotes(true);
    updateNotes((previous) => {
      return previous.filter((note) => note.id !== id);
    });
  }

  async function getData() {
    let data = [];
    await dkeeper.getNotes()
          .then((theNotes)=> {
            console.log(theNotes);
            data = theNotes;
          })
          .catch((error)=> {
            console.log("Some errors occurred:");
            console.log(error);
          });
    return Promise.resolve(data);
  }

  
  useEffect(()=> {
    getData().then(data => updateNotes(data));
    updateRenderNotes(false);
  }, [renderNotes]);

  return (
    <div>
      <Header />
      <CreateArea addNote={addNewNote} />
      {notes.map((aNote) => {
        const { id, title, content } = aNote;
        return (
          <Note
            key={id}
            id={id}
            title={title}
            content={content}
            onDelete={deleteNote}
          />
        );
      })}
      <div>        
        <Footer />
      </div>
    </div>
  );
}

export default App;
