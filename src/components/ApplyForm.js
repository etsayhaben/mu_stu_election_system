import React, { useState } from 'react';

const ApplyForm = () => {
  const [studentId, setStudentId] = useState('');
  const [fullName, setFullName] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [candidatePhoto, setCandidatePhoto] = useState(null);
  const [experience, setExperience] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type.match('image.*')) {
      setCandidatePhoto(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setError('Only image files are allowed');
    }
  };

  const handleExperienceChange = (event) => {
    const file = event.target.files[0];
    if (file.type === 'application/pdf') {
      setExperience(file);
    } else {
      setError('Only PDF files are allowed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('studentId', studentId);
    formData.append('yearOfStudy', yearOfStudy);
    formData.append('fullName', fullName);
    formData.append('candidatePhoto', candidatePhoto);
    formData.append('experience', experience);

    try {
      const response = await fetch('http://localhost:8080/campaign/apply', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`, // Use environment variable
        },
        body: formData,
      });

      if (response.ok) {
        alert("Successfully created");
        setStudentId('');
        setFullName('');
        setYearOfStudy('');
        setCandidatePhoto(null);
        setExperience(null);
        setPhotoPreview(null);
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Error creating account');
      }
    } catch (err) {
      setError(err.message || "Error in creating");
    }
  };

  return (
    <div style={{ width: '50%', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Student ID:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          Year of Study:
          <input type="text" value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} />
        </label>
        <label>
          Candidate Photo:
          <input type="file" onChange={handleFileChange} />
          {photoPreview && <img src={photoPreview} alt="Candidate Photo" />}
        </label>
        <label>
          Experience:
          <input type="file" onChange={handleExperienceChange} />
        </label>
        <button type="submit">Apply</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default ApplyForm;
