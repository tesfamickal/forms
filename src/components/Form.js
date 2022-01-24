import React from 'react'
import { useState } from 'react';
// import './App.css';

const Form = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirm, setConfirm] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [showErr, setShowErr] = useState(false);

    const createUser = (e) => {
        e.preventDefault();

        setShowErr(true)
        setFirst("");
        setLast("");
        setEmail("");
        setPass("");
        setConfirm("");
        setSubmitted(true);
    }

    return (
        <div>
            <form className="form" onSubmit={createUser}>
                {first.length > 2 || first.length === 0 || showErr ? (<></>) : (<div>First Name must be at least 2 characters</div>)}
                <label>First Name: </label>
                <input type="text" value={first} onChange={(e) =>
                    setFirst(e.target.value)} />
                {last.length > 2 || last.length === 0 || showErr ? (<></>) : (<div>Last Name must be at least 2 characters</div>)}
                <label>Last Name: </label>
                <input type="text" value={last} onChange={(e) =>
                    setLast(e.target.value)} />
                {email.length > 2 || email.length === 0 || showErr ? (<></>) : (<div>Email must be at least 2 characters</div>)}
                <label>Email: </label>
                <input type="email" value={email} onChange={(e) =>
                    setEmail(e.target.value)} />
                {pass.length > 8 || pass.length === 0 || showErr ? (<></>) : (<div>Password must be at least 8 characters</div>)}
                <label>Password: </label>
                <input type="password" value={pass} onChange={(e) =>
                    setPass(e.target.value)} />
                {pass === confirm || showErr ? (<></>) : (<div>Passwords must match</div>)}
                <label>Confirm Password: </label>
                <input type="password" value={confirm} onChange={(e) =>
                    setConfirm(e.target.value)} />

                <input type="button" value="Create User" />
            </form>
        </div>
    )
}

export default Form;