function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <footer className="note-footer">
        <small>{date}</small>
        <img
            onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          src="https://img.icons8.com/ios/50/null/del-key.png"
          alt="delete"
        />
      </footer>
    </div>
  );
}

export default Note;
