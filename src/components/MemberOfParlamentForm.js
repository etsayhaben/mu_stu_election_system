import React, { useState } from 'react';

const MemberOfParliament = () => {
  const [student_id, setRegistrationId] = useState('');
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      student_id,
      full_name,
      email,
      role,
    };

    try {
      const response = await fetch('http://localhost:8080/admin/accounts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${"70904492-d97f-43bf-a65f-cc69711951fa"}` // add the authorization token here
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSuccess(true);
        setMessage("successfully created");
        //it must rediret to for example if it is member of parlamnet 
        //the admin creats the account of member of parlament then completes his profile 
        //all his profile is in 
      } else {
        setSuccess(false);
        setError("student already Exists")
        throw new Error('Error creating account');

      }
    } catch (err) {
      setSuccess(false);
      setError('student already existed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Registration ID:</label>
        <input
          type="text"
          value={student_id}
          onChange={(e) => setRegistrationId(e.target.value)}
          required
        /><br />

        <label>Full Name:</label>
        <input
          type="text"
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
          required
        /><br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select Role</option>
          <option value="MemberOfParliament">Member of Parliament</option>
          <option value="ElectionCommittee">Election Committee</option>
          <option value="Candidate">Candidate</option>
          {/* Add other roles here */}
        </select><br />

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
        {success ? message : error}
      </form>
    </div>
  );
};

export default MemberOfParliament;
