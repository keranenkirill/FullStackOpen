const Display = ({ persons, clickDelete }) => {
   return (
     <ul>
       {persons.map((person) => (
         <li key={person.name}>
           {person.name} : {person.number}
           <button onClick={() => clickDelete(person.id, person.name)}>{"delete"}</button>
         </li>
       ))}
     </ul>
   );
 };
 
export default Display;
