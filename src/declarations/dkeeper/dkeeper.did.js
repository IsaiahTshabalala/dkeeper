export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({
    'id' : IDL.Text,
    'title' : IDL.Text,
    'content' : IDL.Text,
  });
  return IDL.Service({
    'createNote' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], ['oneway']),
    'getNotes' : IDL.Func([], [IDL.Vec(Note)], ['query']),
    'removeNote' : IDL.Func([IDL.Text], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
