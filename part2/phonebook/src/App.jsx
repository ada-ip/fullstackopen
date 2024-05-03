import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: "040-123456" }]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");

	const addPerson = (e) => {
		e.preventDefault();
		if (!newName || !newPhone) {
			alert(`Both name and phone are mandatory`);
			return;
		}
		if (persons.some((person) => person.name === newName)) {
			alert(`${newName} is already added to the phonebook`);
			return;
		}
		if (persons.some((person) => person.phone === newPhone)) {
			alert(`${newPhone} is already added to the phonebook`);
			return;
		}
		const newPerson = {
			name: newName,
			phone: newPhone
		};
		setPersons([...persons, newPerson]);
		setNewName("");
		setNewPhone("");
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
				</div>
				<div>
					number: <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map((person, i) => (
					<li key={i}>
						{person.name} {person.phone}
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
