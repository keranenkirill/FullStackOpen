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

const Statistics = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.stats}</p>
      <p>good  {props.good_val}</p>
      <p>neutral  {props.neutral_val}</p>
      <p>bad  {props.bad_val}</p>
      <p>all  {props.all_votes}</p>
      <p>average  {props.average || 0}</p>
      <p>positive  {props.pos_pers || 0} %</p>
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
      <Statistics  good_val={good_val} neutral_val={neutral_val} bad_val={bad_val}  all_votes={all_votes} average={average} pos_pers={positive_persentage}/>
    </div>
  );
};
export default App