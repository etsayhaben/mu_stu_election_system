import React, { useState } from 'react';

const MemberOfParliament = ({ sid, ro }) => {
  const [form, setForm] = useState(1);

  // Form 1 state
  const [studentId, setStudentId] = useState(sid || '');
  const [role, setRole] = useState(ro || '')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [year, setYear] = useState('');

  // Form 2 state
  const [branch, setBranch] = useState('');
  const [department, setDepartment] = useState('');
  const [section, setSection] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleNext = () => {
    setForm(2);
  };

  const handleBack = () => {
    setForm(1);
  };

  const handleBranchChange = (event) => {
    const selectedBranch = event.target.value;
    setBranch(selectedBranch);
    // Reset department when branch changes
    setDepartment('');
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartment = event.target.value;
    setDepartment(selectedDepartment);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      studentId,
      firstName,
      lastName,
      role,
      year,
      branch,
      department,
      section
    };
    try {
      const response = await fetch('http://localhost:8080/api/accounts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${"70904492-d97f-43bf-a65f-cc69711951fa"}` // add the authorization token here
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSuccess(true);

      } else {
        throw new Error('Error creating account');
      }
    } catch (err) {
      console.error(err);
      alert('Error creating account');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      {form === 1 && (
        <form>

          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ width: '20%' }} /><br />

          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ width: '20%' }} /><br />

          <label>Year:</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} style={{ width: '20%' }} /><br />

          <button style={{ width: '20%' }} type="button" onClick={handleNext}>Next</button>
        </form>
      )}

      {form === 2 && (
        <form>
          <label>Branch:</label>
          <select style={{ width: '20%' }} value={branch} onChange={handleBranchChange} >
            <option value="" style={{ width: '20%' }}>Select Branch</option>
            <option style={{ width: '20%' }} value="ayder">Ayder Campus</option>
            <option style={{ width: '20%' }} value="main">Main</option>
            <option style={{ width: '20%' }} value="quiha">Quiha</option>
            <option style={{ width: '20%' }} value="veterinary">Veterinary</option>
            <option style={{ width: '20%' }} value="MIT">MIT</option>
            <option style={{ width: '20%' }} value="business">Business Campus</option>
          </select><br />

          {branch === 'ayder' && (
            <div>
              <label>Department:</label>
              <select value={department} onChange={handleDepartmentChange}>
                <option value="">Select Department</option>
                <option value="medicine">Medicine</option>
                <option value="dentalMedicine">Dental Medicine</option>
                <option value="HO">HO</option>
                <option value="otherHealth">Other Health</option>
              </select><br />
            </div>
          )}

          {branch === 'quiha' && (
            <div>
              <label>Department:</label>
              <select value={department} onChange={handleDepartmentChange}>
                <option value="">Select Department</option>
                <option value="softwareEngineering">Software Engineering</option>
                <option value="electricalEngineering">Electrical Engineering</option>
                <option value="computerScience">Computer Science</option>
                <option value="informationScience">Information Science</option>
                <option value="chemicalEngineering">Chemical Engineering</option>
              </select><br />
            </div>
          )}

          {branch === 'business' && (
            <div>
              <label>Department:</label>
              <select value={department} onChange={handleDepartmentChange}>
                <option value="">Select Department</option>
                <option value="law">Law</option>
                <option value="journalism">Journalism</option>
                <option value="accounting">Accounting</option>
                <option value="management">Management</option>
              </select><br />
            </div>
          )}

          <label>Section:</label>
          <input style={{ width: '20%' }} type="text" value={section} onChange={(e) => setSection(e.target.value)} /><br />

          <button style={{ width: '20%' }} type="button" onClick={handleBack}>Back</button>
          <button style={{ width: '20%' }} type="button" onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default MemberOfParliament;
