import React, { useState } from 'react';
import MemberOfParlamentForm from './MemberOfParlamentForm';
import AdminDashboard from './AdminDashboard';
import CommitteeRegistrationForm from './CommitteeRegistrationForm';

const AccountForm = ({ defaultRole, onFormClose }) => {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(defaultRole || '');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const account = { studentId, password, email, role };

        try {
            const response = await fetch('http://localhost:8080/admin/accounts/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${"70904492-d97f-43bf-a65f-cc69711951fa"}` // add the authorization token here
                },
                body: JSON.stringify(account)
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
    let heading;
    if (defaultRole === "admin")
        heading = <p>create an account for the admin</p>
    else if (defaultRole === "electionCommittee")
        heading = <p>create an account for the election committie member</p>
    else if (defaultRole === "memberOfParliament")
        heading = <p>create an account for the member of parliament</p>
    return (
        <div>
            {!success && (
                <form onSubmit={handleSubmit} style={{ width: '300px' }}>
                    <h2>{heading}</h2>
                    <label>
                        Student ID:
                        <input
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            style={{ width: '50%' }}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '50%' }}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '50%' }}
                        />
                    </label>
                    <input type="hidden" name="role" value={role} />
                    <button type="submit" style={{ width: '100%' }} disabled={loading}>{loading ? 'Loading...' : 'Create Account'}</button>
                </form>
            )}
            {success && defaultRole === 'memberOfParliament' && (
                <MemberOfParlamentForm onFormClose={onFormClose} sid={studentId} ro="defaultRole" />
            )}
            {success && defaultRole === 'admin' && (
                <AdminDashboard onFormClose={onFormClose} />
            )}
            {success && defaultRole === 'electionCommittee' && (
                <CommitteeRegistrationForm onFormClose={onFormClose} />
            )}
            {loading && <p>Creating account...</p>}
        </div>
    );
};

export default AccountForm;