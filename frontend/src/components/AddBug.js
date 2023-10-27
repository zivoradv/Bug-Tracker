import React from "react";
import { useState, useEffect } from 'react';
import "../styles/AddBug.css";
import axios from "axios";

function AddBug({ name, description, handleInputChange, createBug, user, handleSelectChange }) {
  
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users`)
    .then(response => {
      const fetchedNames = response.data.map(user => user.name);
      setNames(fetchedNames);
    })
    .catch(error => console.log(error));
  }, [])

  return (
    <div className="container">
      <form onSubmit={createBug}>
        <label>
          Name
          <input type="text" placeholder="Name of a Bug..." name="name" value={name} onChange={handleInputChange} />
          Description
          <input type="text" placeholder="Description of a Bug..." name="description" value={description} onChange={handleInputChange} />
        </label>
        <label>
          Select User
          <select name="user" onChange={handleSelectChange} >
            <option value="none">Please select a user</option>
            {names.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </select>
        </label>
        <label>
          Priority
          <select name="priority" onChange={handleInputChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="very high">Very High</option>
          </select>
        </label>
        <button className="submit-button" type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBug;
