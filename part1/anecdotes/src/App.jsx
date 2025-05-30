import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const incrementVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected]++;
    setVotes(updatedVotes);
  };

  const getAnecdotesWithMostVotes = () => {
    const maxVotes = Math.max(...votes);
    const indexOfMaxVote = votes.indexOf(maxVotes);
    return anecdotes[indexOfMaxVote];
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>{votes[selected]}</div>
      <button onClick={incrementVote}>Vote</button>
      <button onClick={getRandomAnecdote}>Next anecdote</button>
      <br />
      <br />
      <h2>Anecdote with the most votes</h2>
      <div>{getAnecdotesWithMostVotes()}</div>
      <div> has {Math.max(...votes)}</div>
    </div>
  );
};

export default App;
