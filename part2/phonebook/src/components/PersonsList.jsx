import Person from "./Person";

const PersonsList = ({ persons }) => {
	return (
		<ul>
			{persons.map((person, i) => (
				<Person key={i} name={person.name} phone={person.phone} />
			))}
		</ul>
	);
};

export default PersonsList;
