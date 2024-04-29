import React, { useState } from 'react';
import CommitteeRegistrationForm from './CommitteeRegistrationForm'; // Assuming RegistrationForm.js is in the same directory
import AccountForm from './AccountForm';
import MemberOfParlamentForm from './MemberOfParlamentForm';
import AdminRegistrationDashboard from './AdminRegistrationDashboard';

function AdminDashboard() {
    const [activeContent, setActiveContent] = useState('home');
    const [status, setStatus] = useState('graduated'); // Default status is 'graduated'

    const showContent = (id) => {
        setActiveContent(id);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div>
            <h1>Welcome to Admin Dashboard</h1>
            <div style={{ display: 'flex' }}>
                <div className="sidebar" style={{ backgroundColor: '#333', color: '#fff', width: '200px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><button onClick={() => showContent('home')} className="sidebar-button">Home</button></li>
                        <li><button onClick={() => showContent('register')} className="sidebar-button">Registeration</button></li>
                        <li><button onClick={() => showContent('register-parlament')} className="sidebar-button">register member of parlament</button></li>
                        <li><button onClick={() => showContent('committee')} className="sidebar-button">Committee</button></li>
                        <li><button onClick={() => showContent('view-status')} className="sidebar-button">View Status</button></li>
                        <li><button onClick={() => showContent('generate-report')} className="sidebar-button">Generate Report</button></li>
                        <li><button onClick={() => showContent('change-profile')} className="sidebar-button">Change Profile</button></li>
                    </ul>
                </div>
                <div className="main-content" style={{ flexGrow: 1, padding: '20px' }}>
                    {activeContent === 'home' && <div><h2>Home</h2><p>This is the Home content.</p></div>}
                    {activeContent === 'register' && <div> <CommitteeRegistrationForm status={status} onStatusChange={handleStatusChange} /></div>}
                    {activeContent === 'committee' && <div><h2>Committee</h2><p>This is the Committee content.</p></div>}
                    {activeContent === 'view-status' && <div><h2>View Status</h2><p>This is the View Status content.</p></div>}
                    {activeContent === 'register-parlament' && <div> <AdminRegistrationDashboard /></div>}
                    {activeContent === 'generate-report' && <div><h2>Generate Report</h2><p>This is the Generate Report content.</p></div>}
                    {activeContent === 'change-profile' && <div><h2>Change Profile</h2><p>This is the Change Profile content.</p></div>}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
