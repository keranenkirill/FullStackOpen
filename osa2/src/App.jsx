import { useState, useEffect } from "react";
import phonebookService from "./services/numbers";
import Display from "./tasks/2_14_puhelinluettelo_step9/components/Display";
import Search from "./tasks/2_14_puhelinluettelo_step9/components/Search";
import Form from "./tasks/2_14_puhelinluettelo_step9/components/Form";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("add new person...");
  const [newPhoneNumber, setNewPhoneNum] = useState("add phonenumber...");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((initialNotes) => {
      console.log("promise fulfilled");
      console.log(initialNotes);
      setPersons(initialNotes);
    });
  }, []);
  console.log("render", persons.length, "persons");

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

      phonebookService.create(personObject).then((returnedNote) => {
        setPersons(persons.concat(returnedNote));
        setNewName("add new person...");
        setNewPhoneNum("add phonenumber...");
        console.log("updated phonebook", persons);
      });
    }
  };

  const deletePerson = (id, name) => {
    console.log("deletePerson: deleting", id, name);
    const confirmDelete = window.confirm(`Delete ${name}?`);
    if (confirmDelete) {
      phonebookService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
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
      <Display
        persons={filteredPersons}
        clickDelete={(id, name) => deletePerson(id, name)}
      />
    </div>
  );
};
export default App;
