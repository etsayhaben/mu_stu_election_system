import React, { useState } from 'react';

export default function CommitteeRegistrationForm({ status, onStatusChange }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [yearOfStudy, setYearOfStudy] = useState('');
    const [studentId, setStudentId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [committeePhoto, setCommitteePhoto] = useState(null);
    const [committeeDescription, setCommitteeDescription] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'yearOfStudy':
                setYearOfStudy(value);
                break;
            case 'studentId':
                setStudentId(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            case 'committeeDescription':
                setCommitteeDescription(value);
                break;
            default:
                break;
        }
    };

    const handleFileChange = (event) => {
        setCommitteePhoto(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', {
            firstName,
            lastName,
            status,
            yearOfStudy,
            studentId,
            phoneNumber,
            committeePhoto,
            committeeDescription,
        });
    };

    return (
        <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ textAlign: 'center' }}>Registration Form for Committee</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label><br />
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} /><br />
                <label htmlFor="lastName">Last Name:</label><br />
                <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} /><br />

                <label htmlFor="phoneNumber">Phone Number:</label><br />
                <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} /><br />
                <label htmlFor="committeePhoto"> Photo:</label><br />
                <input type="file" id="committeePhoto" name="committeePhoto" onChange={handleFileChange} style={{ marginBottom: '15px' }} /><br />
                <label htmlFor="status">Status:</label><br />
                <select id="status" name="status" value={status} onChange={onStatusChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}>
                    <option value="graduated">Graduated</option>
                    <option value="inProgress">In Progress</option>
                </select><br />
                {status === 'inProgress' && <>
                    <label htmlFor="yearOfStudy">Year of Study:</label><br />
                    <input type="text" id="yearOfStudy" name="yearOfStudy" value={yearOfStudy} onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} /><br />
                    <label htmlFor="studentId">Student ID:</label><br />
                    <input type="text" id="studentId" name="studentId" value={studentId} onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }} /><br />
                </>}
                <label htmlFor="committeeDescription">Description:</label><br />
                <textarea id="committeeDescription" name="committeeDescription" value={committeeDescription} onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea><br />
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>post</button>
            </form>
        </div>
    );
}
