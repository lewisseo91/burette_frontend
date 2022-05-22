import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SignUpPage() {

    let [loginId, setLoginId] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(loginId);
        console.log(email);
        console.log(password);

        const response = axios.post("http://localhost:8091/user/create", {userId: loginId, email: email, password: password});
        console.log(response);
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" value={loginId} onChange={(event) => setLoginId(event.target.value)} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/login">Back to Login</Link>.</p>
            </footer>
        </div>
    )

}
