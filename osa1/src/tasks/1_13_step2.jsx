import React, { useState } from 'react'
import ReactDom from 'react-dom'

const anecdotes_points = {}

const Button = (props) => (
  <button 
    onClick={props.handleClick}
    style={{
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '6px', 
      padding: '1px 5px', 
      cursor: 'pointer',
      }}
      >
      {props.text}</button>
);

const DisplayText = (props) =>{
  return(
    <div>
      <p>{props.anecdoteline}</p>
      <p>{props.text} {props.anecdote_p}</p>
    </div>
  )
}

const App = () => {
  const [good_val, setGoodValue] = useState(0);
  const [anecdotes, setAnecdoteLine] = useState(0)
  let anecdote_lines= [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ]

  return (
    <div>
      <h1>Give feedback</h1>
      <p></p>
      <DisplayText anecdoteline = {anecdote_lines[anecdotes]}/>
      <DisplayText text="hase votes: " anecdote_p={anecdotes_points[anecdotes]}/>
      <div>
        <Button handleClick={() => {setGoodValue(good_val + 1), anecdotes_points[anecdotes] = ++anecdotes_points[anecdotes] || 1}}  text="vote" />
        <Button handleClick={() => setAnecdoteLine(Math.floor((Math.random() * anecdote_lines.length)))} text="generate anecdote" />
      </div>
    </div>
  );
};
export default App