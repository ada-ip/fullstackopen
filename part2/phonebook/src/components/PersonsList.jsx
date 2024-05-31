import Person from "./Person";

const PersonsList = ({ persons }) => {
	return (
		<ul>
			{persons.map((person) => (
				<Person key={person.id} name={person.name} phone={person.number} />
			))}
		</ul>
	);
};

export default PersonsList;
