const Form = ({
   newName,
   newPhoneNumber,
   handleNameChange,
   handleNumberChange,
   addPerson,
 }) => {
   return (
     <form onSubmit={addPerson}>
       <input value={newName} onChange={handleNameChange} />
       <p></p>
       <input value={newPhoneNumber} onChange={handleNumberChange} />
       <p></p>
       <button type="submit">add</button>
     </form>
   );
 };
 export default Form;
