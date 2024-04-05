const Total = ({ parts }) => {
	return (
		<p style={{ fontWeight: "bold" }}>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
	);
};

const Part = ({ part, exercises }) => {
	return (
		<p>
			{part} {exercises}
		</p>
	);
};

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => (
				<Part key={part.id} part={part.name} exercises={part.exercises} />
			))}
		</div>
	);
};

const Header = ({ courseTitle }) => {
	return <h1>{courseTitle}</h1>;
};

const Course = ({ course }) => (
	<section>
		<Header courseTitle={course.name} />
		<Content parts={course.parts} />
		<Total parts={course.parts} />
	</section>
);

const App = () => {
	const course = {
		id: 1,
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
				id: 1
			},
			{
				name: "Using props to pass data",
				exercises: 7,
				id: 2
			},
			{
				name: "State of a component",
				exercises: 14,
				id: 3
			}
		]
	};

	return <Course course={course} />;
};

export default App;
