import { useState, useEffect } from "react";
import phonebookService from "./services/numbers";
import Display from "./tasks/2_14_puhelinluettelo_step9/components/Display";
import Search from "./tasks/2_14_puhelinluettelo_step9/components/Search";
import Form from "./tasks/2_14_puhelinluettelo_step9/components/Form";
import NotificationMessage from "./tasks/2_14_puhelinluettelo_step9/components/NotificationMessage";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("add new person...");
  const [newPhoneNumber, setNewPhoneNum] = useState("add phonenumber...");
  const [searchTerm, setSearchTerm] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notifclass, setnotifclass] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((initialNotes) => {
      console.log("promise fulfilled");
      console.log(initialNotes);
      setPersons(initialNotes);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const resetInputFields = () => {
    setNewName("add new person...");
    setNewPhoneNum("add phonenumber...");
  };

  const updatePersonNumber = () => {
    const personToUpdate = persons.find((person) => person.name === newName);
    if (personToUpdate) {
      console.log("updatePersonNumber...");
      const updatedPerson = { ...personToUpdate, number: newPhoneNumber };
      phonebookService
        .update(personToUpdate.id, updatedPerson)
        .then((updatedNote) => {
          setPersons(
            persons.map((person) =>
              person.id !== personToUpdate.id ? person : updatedNote
            )
          );
          resetInputFields();

          console.log("Phone number updated for", updatedNote.name);
          setnotifclass("goodAlert");
          setNotificationMessage(
            `Phone number updated for ${updatedNote.name}`
          );
          setTimeOut(2500);
        })
        .catch((error) => {
          console.log("Error updating phone number:", error);
        });
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    // Jos lisättävä nimi on jo sovelluksen tiedossa...
    const nameExists = persons.find((person) => person.name === newName);
    if (nameExists) {
      // template string, tarkistetaan, onko jo sama nimi olemassa ja kysytään,
      // haluaako käyttäjä päivittää olemassa olevan nimen puhelinnumeron...
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook, replace old number with new one?`
      );
      if (confirmUpdate) {
        updatePersonNumber();
      }
    }  else {
      const personObject = {
        name: newName,
        number: newPhoneNumber,
      };
      
      phonebookService
        .create(personObject)
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote));
          resetInputFields();
          setnotifclass("goodAlert");
          setNotificationMessage(
            `${newName}, ${newPhoneNumber} added succesfully to notebook`
          );
          setTimeout(() => {
            setNotificationMessage("goodAlert");
          }, 2500);
        })
        .catch((error) => {
          // Handle errors returned from the server
          console.log(error.response.data.error);
          setnotifclass("errorAlert");
          setNotificationMessage(`Error: ${error.response.data.error}`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 2500);
        })
    }
  };

  const deletePerson = (id, name) => {
    console.log("deletePerson: deleting", id, name);
    const confirmDelete = window.confirm(`Delete ${name}?`);
    if (confirmDelete) {
      phonebookService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));

          setnotifclass("goodAlert");
          setNotificationMessage(`Info of ${name} deleted succesfully`);
          setTimeOut(2000);
        })
        .catch((error) => {
          setnotifclass("errorAlert");
          setNotificationMessage(
            `the info of '${name}' was already deleted from server`
          );
          setTimeOut(2500);
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };

  const setTimeOut = (secs) => {
    setTimeout(() => {
      setNotificationMessage("");
    }, secs);
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
      <NotificationMessage
        message={notificationMessage}
        notifclass={notifclass}
      />
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
