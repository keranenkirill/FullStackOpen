import { useState } from "react";

const Display = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} : {person.number}
        </li>
      ))}
    </ul>
  );
};

const Search = ({ handleSearchChange }) => {
  return (
    <div>
      <label>Filter by Name:</label>
      <input type="text" onChange={handleSearchChange} />
    </div>
  );
};

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

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
    { name: "John Doe", number: "123-456789" },
    { name: "Jane Smith", number: "987-654321" },
    { name: "Alice Johnson", number: "111-222333" },
    { name: "Bob Williams", number: "555-666777" },
    { name: "Charlie Davis", number: "999-888777" },
    { name: "David Moore", number: "444-333222" },
    { name: "Emily Taylor", number: "777-888999" },
    { name: "Frank Martin", number: "666-555444" },
    { name: "Grace Jackson", number: "222-111000" },
    { name: "Henry Brown", number: "333-444555" },
    { name: "Ivy Martinez", number: "888-999000" },
    { name: "Jack Wilson", number: "444-555666" },
    { name: "Kelly White", number: "111-222333" },
    { name: "Leo Harris", number: "666-555444" },
    { name: "Mia Clark", number: "999-888777" },
    { name: "Nathan Turner", number: "555-666777" },
    { name: "Olivia Young", number: "111-222333" },
    { name: "Peter Turner", number: "444-333222" },
    { name: "Quinn Foster", number: "777-888999" },
    { name: "Rachel Lee", number: "555-666777" },
    { name: "Samuel Reed", number: "333-444555" },
    { name: "Tina Stewart", number: "222-111000" },
    { name: "Ulysses Brooks", number: "444-333222" },
    { name: "Victoria Hill", number: "666-555444" },
    { name: "Walter Phillips", number: "888-999000" },
    { name: "Xena Fisher", number: "111-222333" },
    { name: "Yasmine Baker", number: "555-666777" },
    { name: "Zachary Brown", number: "777-888999" },
  ]);

  const [newName, setNewName] = useState("add new person...");
  const [newPhoneNumber, setNewPhoneNum] = useState("add phonenumber...");
  const [searchTerm, setSearchTerm] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    //Jos lisättävä nimi on jo sovelluksen tiedossa, estä lisäys
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      //template string, tarkistetaan, onko jo sama nimi olemassa
      alert(`${newName} is already in the phonebook.`);
    } else if (
      newName === "add new person..." ||
      newPhoneNumber === "add phonenumber..."
    ) {
      //template string, tarkistetaan yritetäänkö lisätä alustus tekstit
      alert(`this is not valid, add name and number`);
    } else {
      const personObject = {
        name: newName,
        number: newPhoneNumber,
      };
      setPersons(persons.concat(personObject));
      setNewName("add new person...");
      setNewPhoneNum("add phonenumber...");
      console.log("updated phonebook", persons);
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //Jotta kontrolloidun syötekomponentin editoiminen olisi mahdollista, täytyy sille rekisteröidä tapahtumankäsittelijä, joka synkronoi syötekenttään tehdyt muutokset komponentin App tilaan
  const handleNameChange = (event) => {
    //tapahtumakäsittelijä input formille nimen kirjoittamisessa
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    //tapahtumakäsittelijä input formille numeron kirjoittamisessa
    setNewPhoneNum(event.target.value);
  };
  const handleSearchChange = (event) => {
    //tapahtumakäsittelijä nimen filtteröinnissä
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search</h3>
      <Search handleSearchChange={handleSearchChange} />
      <p></p>
      <h3>Add new number</h3>
      <Form
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Display persons={filteredPersons} />
    </div>
  );
};

export default App;
