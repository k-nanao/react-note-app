import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid';

function App() {
  //追加されるノートを配列で格納する
  const [notes, setNotes] = useState([]);
  //アクティブになっているかの状態を管理する
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: '新しいノート',
      content: '新しいノートの内容',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  return (
    <div className='App'>
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        activeNote={activeNote}
        onDeleteNote={onDeleteNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  );
}

export default App;
