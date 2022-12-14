import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.form?.pathname || '/';

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(form, { replace: true })
    }
    const handleUserSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }



    return (
        <div className="from-container">
            <div>
                <h2 className="form-title">Login</h2>

                <form onSubmit={handleUserSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' id='' required />
                    </div>
                    <p>{error?.message}</p>
                    {
                        loading && <p>loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-jhon ? <Link className='form-link' to='/signUp'>Create an account</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;