import { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ text, value }) => (
	<p>
		{text}: {value}
	</p>
);

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const calculateAverage = (data) => {
		const categoriesValues = {
			good: 1,
			neutral: 0,
			bad: -1
		};
		let avg = 0;
		data.forEach((d) => (avg += categoriesValues[d.category] * d.number));
		if (avg === 0) return 0;
		return avg / data.reduce((acc, curr) => acc + curr.number, 0);
	};

	const calculatePercentage = (number, all) => {
		if (all === 0) return 0;
		return (100 * number) / all;
	};

	return (
		<>
			<section>
				<Header text="Give feedback" />
				<Button onClick={() => setGood(good + 1)} text="Good" />
				<Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
				<Button onClick={() => setBad(bad + 1)} text="Bad" />
			</section>
			<section>
				<Header text="Statistics" />
				<Display text="Good" value={good} />
				<Display text="Neutral" value={neutral} />
				<Display text="Bad" value={bad} />
				<Display text="All" value={bad + neutral + good} />
				<Display
					text="Average"
					value={calculateAverage([
						{ category: "good", number: good },
						{ category: "neutral", number: neutral },
						{ category: "bad", number: bad }
					])}
				/>
				<Display text="Positive" value={`${calculatePercentage(good, bad + neutral + good)}%`} />
			</section>
		</>
	);
};

export default App;
