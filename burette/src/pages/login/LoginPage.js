import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const SignInPage = () => {
    const history = useHistory();
    let [loginId, setLoginId] = useState("");
    let [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(loginId);
        console.log(password);

        const response = await axios.post("http://localhost:8091/user/login", {userId: loginId, password: password});
        console.log(response);
        
        if(response.status === 200) {
            history.push('/');
        }
    }
    
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="id" value={loginId} onChange={(event) => setLoginId(event.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                    <br/>
                    <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
            </footer>
        </div>
    )
}


export default SignInPage;
