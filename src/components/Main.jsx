import React from 'react';
import './Main.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Main = ({ activeNote, onUpDateNote }) => {
  if (!activeNote) {
    return <div className='note-nothing'>ノートが選択されてません</div>;
  }

  const onEditNote = (key, value) => {
    onUpDateNote({
      //以前のアクティブになっていたノートに対して
      ...activeNote,
      //動的キーtitleなのかcontentなのか自動で判別してくれる
      [key]: value,
      modDate: Date.now(),
    });
  };

  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        <input
          id='title'
          type='text'
          placeholder='タイトルを記入'
          value={activeNote.title}
          onChange={(e) => onEditNote('title', e.target.value)}
        />
        <textarea
          id='content'
          placeholder='ノート内容を記入'
          value={activeNote.content}
          onChange={(e) => onEditNote('content', e.target.value)}
        ></textarea>
      </div>
      <div className='app-main-note-preview'>
        <h1 className='preview-title'>{activeNote.title}</h1>
        <ReactMarkdown className='markdown-preview'>
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
