const App = () => {
   const course = 'Half Stack application development'
   const part1 = 'Fundamentals of React'
   const exercises1 = 10
   const part2 = 'Using props to pass data'
   const exercises2 = 7
   const part3 = 'State of a component'
   const exercises3 = 14
   const total = exercises1 + exercises2 + exercises3
 
   return (
     <div>
       <Header course={course} />
       <Content part1={part1} exercises1={exercises1}/>
       <Content part1={part2} exercises2={exercises2}/>
       <Content part1={part3} exercises3={exercises3}/>
       <Total total={total}/>
     </div>
   )
 }
 
 const Header = (props) =>{
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