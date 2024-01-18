const Header = ({course})=> 
   <h2>{course}</h2>

const Content = ({parts})=> // päälistan sanakirjassa olevan parts listan sanakirjan sisällön purku 
   <div>
      {parts.map(part=>
         <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
      )}
   </div>

const Part = (props)=> 
   <p>
      {props.name}: {props.exercises}
   </p>

const Total = ({parts})=>
   <p>
      <b>Total of {parts.reduce((s,p)=> s+p.exercises, 0)} exercises</b>
   </p>



const Course= ({course})=> {
   console.log('name',course["name"])
   console.log('id', course["id"])
   console.log('parts',course["parts"])
   return(
      <div>
         <Header course={course["name"] /*päälistan sanakirjan name */} />  
         <Content parts={course["parts"] /*päälistan sanakirjassa olevan parts listan sisältämä data */} /> 
         <Total parts={course["parts"] /*päälistan sanakirjassa olevan parts listan sisältämä data */} /> 
      </div>
   )
}  
export default Course