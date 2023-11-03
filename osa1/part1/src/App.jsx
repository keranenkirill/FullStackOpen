const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
const total ={
    total_exercises: part1.exercises + part2.exercises + part3.exercises
  } 


  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises}/>
      <Content part2={part2.name} exercises2={part2.exercises}/>
      <Content part3={part3.name} exercises3={part3.exercises}/>
<Total total={total.total_exercises}/>
    </div>
  )
}



const Header = (props) =>{
//Protip: voit kohdata ohjelmoidessasi ongelmia sen suhteen missä muodossa komponentin saamat propsit ovat.
  // Hyvä keino varmistua asiasta on tulostaa propsit konsoliin
  console.log(props)
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  );
}

const Total = (props) =>{
  console.log(props)
  return (
    <div>
      <p>
       Total count of exercises: {props.total}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
}
export default App