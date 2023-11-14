import React, { useState } from 'react'
import ReactDom from 'react-dom'

const anecdotes_points = {}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const DisplayText = (props) =>{
  return(
    <p>{props.anecdoteline}</p>
  )
}

const StatisticsLine = (props) =>{
  return(
  <tr>
    <td>{props.text}</td>
    <td>{props.val}</td>
  </tr>
  )
}

const Statistics = (props) => {
  console.log(props) 
  console.log(anecdotes_points)
  return (
    <div>
      <table>
      <tbody>
        <StatisticsLine text="good"  val={props.good_val}/>
        <StatisticsLine text="neutral" val={props.neutral_val}/>
        <StatisticsLine text="bad" val={props.bad_val}/>
        <StatisticsLine text="all" val={props.all_votes}/>
        <StatisticsLine text="average" val={props.average || 0}/>
        <StatisticsLine text="positive" val={props.pos_pers + " %" || 0}/>
      </tbody>
    </table>
      
    </div>
  )
}

const App = () => {
  const [good_val, setGoodValue] = useState(0);
  const [neutral_val, setNeutralValue] = useState(0);
  const [bad_val, setBadValue] = useState(0);
  let all_votes = bad_val+neutral_val+good_val
  let average = (good_val-bad_val)/all_votes
  let positive_persentage = (good_val/all_votes)*100  
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
      <div>
        <Button handleClick={() => {setGoodValue(good_val + 1), anecdotes_points[anecdotes] = ++anecdotes_points[anecdotes] || 1}}  text="good" />
        <Button handleClick={() => setNeutralValue(neutral_val + 1)} text="neutral" />
        <Button handleClick={() => setBadValue(bad_val + 1)} text="bad" />
      </div>
      <br/>
      <div>
        <Button handleClick={() => setAnecdoteLine(Math.floor((Math.random() * anecdote_lines.length)))} text="generate anecdote" />
      </div>


      
  
      <h1>Statistics</h1>
      { all_votes===0 ? 
        (<h4> No feedback given </h4> ) 
        : 
        (<Statistics  good_val={good_val} neutral_val={neutral_val} bad_val={bad_val}  all_votes={all_votes} average={average} pos_pers={positive_persentage} />)
      }
    </div>
  );
};
export default App