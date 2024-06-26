import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
	const [notes, setNotes] = useState(props.notes);
	const [newNote, setNewNote] = useState("a new note");
	const [showAll, setShowAll] = useState(true);

	const notesToShow = showAll ? notes : notes.filter((n) => n.important);

	const addNote = (event) => {
		event.preventDefault();
		const note = {
			content: newNote,
			important: Math.random() < 0.5,
			id: notes.length + 1
		};
		setNotes([...notes, note]);
		setNewNote("");
	};

	const handleNoteChange = (event) => {
		console.log(event.target.value);
		setNewNote(event.target.value);
	};

	return (
		<div>
			<h1>Notes</h1>
			<div>
				<button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Important" : "Show All"}</button>
			</div>
			<ul>
				{notesToShow.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
			<form onSubmit={addNote}>
				<input type="text" value={newNote} onChange={handleNoteChange} />
				<button type="submit">Save</button>
			</form>
		</div>
	);
};

export default App;
