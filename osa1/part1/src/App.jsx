const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} exercises1={parts[0].exercises}/>
      <Content part2={parts[1].name} exercises2={parts[1].exercises}/>
      <Content part3={parts[2].name} exercises3={parts[2].exercises}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
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