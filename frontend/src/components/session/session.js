import React from 'react'

const Session = ({logout, name}) => {
    const userName= name ? name.firstName : ''

    return (
        <div>
            <h1>Session</h1>
            <p>Welcome {userName}</p>
            <button onClick={() => logout()}>Logout</button>
        </div>
    );
};

export default Session;