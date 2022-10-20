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

  //ノートを追加する関数
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: '',
      content: '',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    // console.log(notes);
  };

  //ノートを削除する関数
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  //アクティブになっているノートのオブジェクトを取得する関数。idだけではなくオブジェクト全て取ってこれる
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  //Mainコンポーネントのnoteを編集したらSidebarの配列notesは更新されなければならない
  const onUpDateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す
    const upDatedNotesArray = notes.map((note) => {
      //もしmap関数で展開したノートとこれから編集するノートのidが一緒なら
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(upDatedNotesArray);
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
      <Main activeNote={getActiveNote()} onUpDateNote={onUpDateNote} />
    </div>
  );
}

export default App;
