import React, { useState } from 'react'
import ReactDom from 'react-dom'

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
    {props.text}
</button>
);

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

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGoodValue(good_val + 1)}  text="good" />
      <Button handleClick={() => setNeutralValue(neutral_val + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad_val + 1)} text="bad" />
      
      <h1>Statistics {good_val}</h1>
    
      { all_votes===0 ? 
      (<h4> No feedback given </h4> ) 
      : 
      (<Statistics  good_val={good_val} neutral_val={neutral_val} bad_val={bad_val}  all_votes={all_votes} average={average} pos_pers={positive_persentage} />)
      }
    </div>
  );
};
export default App