import { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ text, value }) => (
	<p>
		{text}: {value}
	</p>
);

const App = () => {
	// save clicks of each button to its own state
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
			<section>
				<Header text="Statistics" />
				<Display text="Good" value={good} />
				<Display text="Neutral" value={neutral} />
				<Display text="Bad" value={bad} />
			</section>
		</>
	);
};

export default App;
