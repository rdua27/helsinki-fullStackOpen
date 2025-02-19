import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <p>All {good + neutral + bad}</p>
      <p>Average {(good * 1 + bad * -1) / (good + neutral + bad)}</p>
      <p>positive {(good / (good + neutral + bad)) * 100} %</p>
    </>
  );
};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClicked = () => setGood(good + 1);

  const handleNeutralClicked = () => setNeutral(neutral + 1);

  const handleBadClicked = () => setBad(bad + 1);

  return (
    <>
      <h3>Give Feedback</h3>
      <Button onClick={handleGoodClicked} text="good" />
      <Button onClick={handleNeutralClicked} text="neutral" />
      <Button onClick={handleBadClicked} text="bad" />

      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>bad {bad}</p>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
