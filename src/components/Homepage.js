import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSSFolder/homepage.css';

function Homepage() {
  const [id, setId] = useState('');
  const [name, setStudentName] = useState('');
  const [department, setDepartment] = useState('');
  const [section, setSection] = useState('');
  const [sex, setSex] = useState('');
  const [role, setRole] = useState('');
  const [branch, setBranch] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      id,
      name,
      department,
      section,
      sex,
      role,
      branch
    };

    // Send the form data to the backend
    axios.post('http://localhost:9000/api', formData)
      .then(response => {
        console.log(response.data);
        // Handle success or show a success message to the user
      })
      .catch(error => {
        console.error(error);
        // Handle error or show an error message to the user
      });
  };

  const handleShowStudents = () => {
    // Retrieve students data from the database
    axios.get('http://localhost:9000/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleShowStudents();
  }, []);

  return (
    <div className="container">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={event => setId(event.target.value)}
          />
        </label>
        <label>
          Student Name:
          <input
            type="text"
            value={name}
            onChange={event => setStudentName(event.target.value)}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            value={department}
            onChange={event => setDepartment(event.target.value)}
          />
        </label>
        <label>
          Section:
          <input
            type="text"
            value={section}
            onChange={event => setSection(event.target.value)}
          />
        </label>
        <label>
          Sex:
          <input
            type="text"
            value={sex}
            onChange={event => setSex(event.target.value)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            value={role}
            onChange={event => setRole(event.target.value)}
          />
        </label>
        <label>
          Branch:
          <input
            type="text"
            value={branch}
            onChange={event => setBranch(event.target.value)}
          />
        </label>
        <button type="submit">Register</button>
       
        
      </form>
      <button onClick={handleShowStudents}>Show Students</button>
      <div className="students-list">
        <h2>Students List</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.name} - {student.department} - {student.section}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Homepage;