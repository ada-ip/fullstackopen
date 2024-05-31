const Person = ({ name, phone, handleDelete }) => {
	return (
		<li>
			{name} {phone} <button onClick={handleDelete}>Delete</button>
		</li>
	);
};

export default Person;
