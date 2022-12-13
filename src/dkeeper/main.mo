import Text "mo:base/Text";
import List "mo:base/List";
import Bool "mo:base/Bool";
import Debug "mo:base/Debug";

actor DKeeper{

  public type Note = {
    id: Text;
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(theId:Text, theTitle:Text, theContent:Text){
    let newNote = {
      id = theId;
      title = theTitle;
      content = theContent;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));
  };

  public func removeNote(theId:Text){
    notes := List.filter<Note>(notes, func(aNote){ return aNote.id != theId; });
  };

  public query func getNotes():async [Note]{
    return List.toArray<Note>(notes);
  }
};