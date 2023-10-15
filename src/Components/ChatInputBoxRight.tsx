import React, { useState, CSSProperties } from 'react';

const ChatInputBoxRight: React.FC = () => {
  const [text, setText] = useState('Edit me!');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const textareaContainerStyle: CSSProperties = {
    marginTop: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div>
        <p>{text}</p>
      </div>
      <div style={textareaContainerStyle}>
        <textarea
          value={text}
          onChange={handleTextChange}
          rows={4}
          cols={50}
          placeholder="Type your text here..."
        />
      </div>
    </div>
  );
};

export default ChatInputBoxRight;
