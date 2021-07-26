import React from 'react';


function Users({ users, onDelete }) {

    const deleteController = (userName) => {
        onDelete(userName);
    }

    return (
        <section className="allUserSection">
            <div className="container">
                <div className="row userList-row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between">
                            <h3 className="totalUsers">All Users </h3>
                            <h3 className="totalUsers"><strong>Total User:</strong> {users.length} </h3>
                        </div>
                    </div>
                    
                    { users.map(user => (
                        <div key={user.id} className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
                            <div className="profile">
                                <h2>{user.firstName} {user.lastName}</h2>
                                <p>{user.email}</p>

                                <button
                                    onClick={() => deleteController(user.id)}
                                    className="btn deleteBtn">Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Users;
