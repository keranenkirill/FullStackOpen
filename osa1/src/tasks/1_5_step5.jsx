const App = () => {
   const course = {
     name: 'Half Stack application development',
     parts: [
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
   }
   const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
 
 
   return (
     <div>
       <Header course={course} />
       <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}/>
       <Content part2={course.parts[1].name} exercises2={course.parts[1].exercises}/>
       <Content part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
       <Total total={totalExercises}/>
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
         {props.course.name}
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