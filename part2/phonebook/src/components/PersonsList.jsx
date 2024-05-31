import Person from "./Person";

const PersonsList = ({ persons, handleDelete }) => {
	return (
		<ul>
			{persons.map((person) => (
				<Person
					key={person.id}
					name={person.name}
					phone={person.number}
					handleDelete={() => handleDelete(person.id, person.name)}
				/>
			))}
		</ul>
	);
};

export default PersonsList;
