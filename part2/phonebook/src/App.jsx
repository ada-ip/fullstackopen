import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const addPerson = (e) => {
		e.preventDefault();
		if (newName) {
			const newPerson = { name: newName };
			setPersons([...persons, newPerson]);
			setNewName("");
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map((person, i) => (
					<li key={i}>{person.name}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
