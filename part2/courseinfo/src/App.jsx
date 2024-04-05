const Total = ({ parts }) => {
	return (
		<p style={{ fontWeight: "bold" }}>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises </p>
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
	const courses = [
		{
			name: "Half Stack application development",
			id: 1,
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
				},
				{
					name: "Redux",
					exercises: 11,
					id: 4
				}
			]
		},
		{
			name: "Node.js",
			id: 2,
			parts: [
				{
					name: "Routing",
					exercises: 3,
					id: 1
				},
				{
					name: "Middlewares",
					exercises: 7,
					id: 2
				}
			]
		}
	];

	return (
		<div>
			{courses.map((course) => (
				<Course key={course.id} course={course} />
			))}
		</div>
	);
};

export default App;
