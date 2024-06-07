import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [filter, setFilter] = useState("");
	const [notificationMsg, setNotificationMsg] = useState("");
	const [notificationType, setNotificationType] = useState("info");

	useEffect(() => {
		personsService
			.getAll()
			.then((initialPersons) => setPersons(initialPersons))
			.catch((error) => console.error(error));
	}, []);

	const addPerson = (e) => {
		e.preventDefault();
		if (!newName || !newPhone) {
			alert(`Both name and phone are mandatory`);
			return;
		}
		const newPerson = {
			name: newName,
			number: newPhone
		};

		const person = persons.find((person) => person.name === newName);
		if (person) {
			if (
				confirm(
					`${newName} is already added to the phonebook. Do you want to replace the old number with a new one?`
				)
			) {
				personsService
					.update(person.id, { ...person, number: newPerson.number })
					.then((updatedPerson) => {
						const updatedPersons = persons.map((p) => (p.id === updatedPerson.id ? updatedPerson : p));
						setPersons(updatedPersons);
						setNewName("");
						setNewPhone("");
						setNotificationMsg(`${updatedPerson.name}'s phone number has been correctly updated`);
						setNotificationType("info");
						setTimeout(() => {
							setNotificationMsg("");
						}, 5000);
					})
					.catch((error) => {
						setNotificationMsg(`${person.name}'s phone number has already been deleted from the server`);
						setNotificationType("error");
						setTimeout(() => {
							setNotificationMsg("");
						}, 5000);
					});
			}
		} else {
			personsService
				.create(newPerson)
				.then((createdPerson) => {
					setPersons([...persons, createdPerson]);
					setNewName("");
					setNewPhone("");
					setNotificationMsg(`Added ${createdPerson.name}'s phone number`);
					setNotificationType("info");
					setTimeout(() => {
						setNotificationMsg("");
					}, 5000);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const deletePerson = (id, name) => {
		if (confirm(`Do you really want to delete ${name}'s phone?`)) {
			personsService
				.deletePerson(id)
				.then((deletedPerson) => {
					setPersons(persons.filter((p) => p.id !== deletedPerson.id));
				})
				.catch((error) => console.error(error));
		}
	};

	const numbersToShow = filter ? persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase())) : persons;

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={notificationMsg} type={notificationType} />
			<Filter filter={filter} setFilter={setFilter} />
			<h3>Add a new number</h3>
			<PersonForm
				newName={newName}
				setNewName={setNewName}
				newPhone={newPhone}
				setNewPhone={setNewPhone}
				addPerson={addPerson}
			/>
			<h3>Numbers</h3>
			<PersonsList persons={numbersToShow} handleDelete={deletePerson} />
		</div>
	);
};

export default App;
