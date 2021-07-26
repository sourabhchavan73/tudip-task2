import React, { useState } from 'react'

function Form({ onAddUser }) {

    const [ firstName, setFirstName] = useState('');
    const [ lastName, setLastName] = useState('');
    const [ email, setEmail] = useState('');

    const [ nameError, setNameError] = useState('');
    const [ lastNameError, setLastNameError] = useState('');
    const [ emailError, setEmailError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!firstName){
            setNameError('Enter First Name');
            return;
        }else if(!lastName){
            setLastNameError('Enter Last Name');
            return;
        }else if(!email){
            setEmailError('Enter Email');
            return;
        }

        onAddUser({ firstName, lastName, email});
        setFirstName('');
        setLastName('');
        setEmail('');
        setNameError('');
        setLastNameError('');
        setEmailError('');

    }

    const firstNameController = (e) => {
        if(firstName.length >= 0 ){
            setNameError('');
        }
        setFirstName(e.target.value);
    }

    const lastNameController = (e) => {
        if(lastName.length >= 0){
            setLastNameError('');
        }
        setLastName(e.target.value);
    }

    const emailController = (e) => {
        if(email.length >= 0){
            setEmailError('');
        } 
        setEmail(e.target.value)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-7 col-sm-10 col-xs-12 col-12">
                    <form className="addUserForm" onSubmit={onSubmit} autoComplete="off">
                        <h4 style = {{ marginBottom: '1rem'}}>Add User</h4>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input 
                                type="text" 
                                value={firstName}
                                onChange={firstNameController}
                                placeholder="Enter First Name" />
                                <span className="isError">{nameError}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Last_name">Last Name</label>
                            <input 
                                type="text" 
                                value={lastName}
                                onChange={lastNameController}
                                placeholder="Enter Last Name" />
                                <span className="isError">{lastNameError}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={emailController}
                                placeholder="Enter Email Address" />
                                <span className="isError">{emailError}</span>
                        </div>

                        <button type="submit" className="btn addUserBtn" >Add User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
