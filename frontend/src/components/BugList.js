import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import AddBug from './AddBug';
import CurrentBug from './CurrentBug';

const BugList = () => {

  const [bugs, setBugs] = useState([])

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    priority: "low",
    user: ""
  })

  console.log(formData)
  const { name, description, priority, user } = formData

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = async (e) => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      const users = response.data;
  
      const { name, value } = e.target;
  
      const userWithThatName = users.find(user => user.name === value);
  
      setFormData({ ...formData, [name]: userWithThatName.name });
  
    } catch (error) {
      console.error("Error retrieving users:", error);
    }
  };
  

  const createBug = async (e) => {
    e.preventDefault()
    if (name === "") {
      return toast.error("Name of the bug cannot be empty");
    }
    if ( user === "") {
      return toast.error("Bug must be assigned to someone");
    }
    try {
      await axios.post(`http://localhost:5000/api/bugs`, formData)
      toast.success("Bug added successfully")
      setFormData({ ...formData, name: "", description: "", user: "" })
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getBugs = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/bugs")
      setBugs(data)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useState(() => {
    getBugs()
  }, [])

  const getSingleBug = async (bug) => {
    setFormData({ name: bug.name, description: bug.description, priority: bug.priority, bug: bug.user })
  }

  const [addBug, setAddBug] = useState(true);

  function showAddBug() {
    setAddBug(true);
  }
  function showCurrentBug() {
    setAddBug(false);
    getBugs()
  }

  return (
    <div>
      <div className="view-selection">
        <button className="view-button" onClick={() => showCurrentBug()}>Current Bugs</button>
        <button className="view-button active-button" onClick={() => showAddBug()}>Add Bug</button>
      </div>

      <div className="Container">
        {addBug ? (
          <AddBug
            name={name}
            description={description}
            priority={priority}
            user={user}
            handleSelectChange={handleSelectChange}
            handleInputChange={handleInputChange}
            createBug={createBug}
          />
        ) : (
          <>
            {
              bugs.map((bug, i) => {
              return <CurrentBug
                key={bug._id}
                bug={bug}
                i={i}
                getSingleBug={getSingleBug}
              />
            })
          }
          </>
        )}
      </div>
    </div>
  )
}

export default BugList