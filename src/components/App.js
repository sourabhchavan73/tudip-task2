import React, { useState } from 'react';

import Form from './Form';
import Users from './Users';
import Notfound from './Notfound'

function App() {

    const [ users, setusers] = useState([]);

    // add user
    const addUser = (user) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newUser = { id, ...user }
        setusers([ ...users, newUser])
    }

    //delete user
    const deleteuser = (userId) => {
        setusers(users.filter((user) => user.id !== userId));
    }

    return (
        <div>
            <Form onAddUser={addUser} />
            { users.length > 0 ?             
                <Users 
                    users={users}
                    onDelete={deleteuser}
            /> : <Notfound /> }
        </div>
    )
}

export default App
