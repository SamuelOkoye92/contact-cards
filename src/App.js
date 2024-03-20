import React, { useState, useEffect } from "react";
import "./App.css";
import ContactCard from "./ContactCard";
import Form from "./Form";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
      <Form />
    </>
  );
};

export default App;
