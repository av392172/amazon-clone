import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //some fancy firebase login shittttt...

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        //some fancy firebase register shittt...
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password
                // console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" />
                {/* // src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png" alt="" /> */}
                {/* // src="" alt="" /> */}
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice and our Intrest-Based Ads Notice.
                </p>

                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;
