import React, { useState } from 'react'
import ReactDom from 'react-dom'


const Display = (props) => (
  <div>
    <span style={{ fontWeight: 'bold' }}>{props.value}</span>
  </div>
);

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

const App = () => {
  const [good_val, setGoodValue] = useState(0);
  const [neutral_val, setNeutralValue] = useState(0);
  const [bad_val, setBadValue] = useState(0);
  const g_feedback = "GIVE FEEDBACK";
  const stats = "STATISTICS";

  const setToValue = (value, setter) => {
    console.log('value now', value);
    setter(value);
  };

  return (
    <div>
      <Display value={g_feedback} />
      <Button handleClick={() => setToValue(good_val + 1, setGoodValue)} text="good" />
      <Button handleClick={() => setToValue(neutral_val + 1, setNeutralValue)} text="neutral" />
      <Button handleClick={() => setToValue(bad_val + 1, setBadValue)} text="bad" />
      <p></p>
      <Display value={stats} />
      <Display value={`good: ${good_val}`} />
      <Display value={`neutral: ${neutral_val}`} />
      <Display value={`bad: ${bad_val}`} />
    </div>
  );
};

export default App