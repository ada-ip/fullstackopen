import { useState, useEffect } from "react";
import Note from "./components/Note";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import noteService from "./services/notes";

const App = (props) => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("a new note");
	const [showAll, setShowAll] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		noteService
			.getAll()
			.then((initialNotes) => {
				setNotes(initialNotes);
			})
			.catch((error) => console.log(error));
	}, []);

	const notesToShow = showAll ? notes : notes.filter((n) => n.important);

	const addNote = (event) => {
		event.preventDefault();
		const note = {
			content: newNote,
			important: Math.random() < 0.5
		};

		noteService
			.create(note)
			.then((newNote) => {
				setNotes([...notes, newNote]);
				setNewNote("");
			})
			.catch((error) => console.error(error));
	};

	const handleNoteChange = (event) => {
		setNewNote(event.target.value);
	};

	const toggleImportance = (id) => {
		const note = notes.find((n) => n.id === id);
		const newNote = { ...note, important: !note.important };
		noteService
			.update(note.id, newNote)
			.then((updatedNote) => {
				setNotes(notes.map((n) => (n.id === note.id ? updatedNote : n)));
			})
			.catch((error) => {
				setErrorMessage(`Note '${note.content}' was already removed from server`);
				setTimeout(() => {
					setErrorMessage(null);
				}, 5000);
			});
	};

	return (
		<div>
			<h1>Notes</h1>
			<Notification message={errorMessage} />
			<div>
				<button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Important" : "Show All"}</button>
			</div>
			<ul>
				{notesToShow.map((note) => (
					<Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />
				))}
			</ul>
			<form onSubmit={addNote}>
				<input type="text" value={newNote} onChange={handleNoteChange} />
				<button type="submit">Save</button>
			</form>
			<Footer />
		</div>
	);
};

export default App;
