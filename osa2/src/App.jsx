import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("add new person...");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };
    setPersons(persons.concat(personObject));
    setNewName("add new person...");
    console.log("updated phonebook", persons); //näyttää yhden lisäyksen jäljessä kun uusi lisätty
  };

  const handleNoteChange = (event) => {
    //Jotta kontrolloidun syötekomponentin editoiminen olisi mahdollista, täytyy sille rekisteröidä tapahtumankäsittelijä, joka synkronoi syötekenttään tehdyt muutokset komponentin App tilaan
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <input value={newName} onChange={handleNoteChange} />
        <button type="submit">add</button>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
