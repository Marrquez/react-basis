import { useState } from 'react'

function Person() {
    const [person, setPerson] = useState({ name: "John", age: 100 });
  
    const handleIncreaseAge = () => {
      console.log("in handleIncreaseAge (before setPerson call): ", person);
      /* Using regular state: React will repace the current state with the value
       we passed in */
      // setPerson({ ...person, age: person.age + 1 });
      // setPerson({ ...person, age: person.age + 1 });

      /* Using state updater function: when a callback is passed, it ensures that
      the latest state is passed in as an argument to the callback */
      setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
      setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
      
      // we've called setPerson, surely person has updated?
      console.log("in handleIncreaseAge (after setPerson call): ", person);
    };
  
    // this console.log runs every time the component renders
    // what do you think this will print?
    console.log("during render: ", person);
  
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }

  export default Person;