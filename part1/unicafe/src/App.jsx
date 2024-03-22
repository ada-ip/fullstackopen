import { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
	<tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr>
);

const Statistics = ({ good, neutral, bad }) => {
	const calculateAverage = () => {
		let avg = good * 1 + neutral * 0 + bad * -1;
		if (avg === 0) return 0;
		return avg / (good + neutral + bad);
	};

	const calculatePositivePercentage = () => {
		if (good + neutral + bad === 0) return 0;
		return (100 * good) / (good + neutral + bad);
	};

	return (
		<section>
			<Header text="Statistics" />
			{good + neutral + bad === 0 ? (
				<div>No feedback given</div>
			) : (
				<table>
					<tbody>
						<StatisticLine text="Good" value={good} />
						<StatisticLine text="Neutral" value={neutral} />
						<StatisticLine text="Bad" value={bad} />
						<StatisticLine text="All" value={bad + neutral + good} />
						<StatisticLine text="Average" value={calculateAverage()} />
						<StatisticLine text="Positive" value={`${calculatePositivePercentage()}%`} />
					</tbody>
				</table>
			)}
		</section>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<section>
				<Header text="Give feedback" />
				<Button onClick={() => setGood(good + 1)} text="Good" />
				<Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
				<Button onClick={() => setBad(bad + 1)} text="Bad" />
			</section>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
};

export default App;
