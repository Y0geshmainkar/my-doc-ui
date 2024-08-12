import React, { useState } from 'react'
import './LoginCmp.css'
import ButtonCmp from '../common/ButtonCmp';
import InputCmp from '../common/ImputCmp';

function LoginCmp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSUbmit = (event) => {
        event.preventDefault();


        console.log('Email:', email);
        console.log('Password', password)

    };


    return (
        <div className='container'>
            <h1>Log in</h1>

            <form onSubmit={handleSUbmit}>
                <div className='mb-20'>
                    <label for="email">Email</label>
                    <InputCmp
                        leftIcon={<span role='img' aria-label='email'><i class="fa-regular fa-envelope" style={{ color: "#224957" }}></i></span>}
                        id='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>

                <div className='mb-20'>
                    <label for="password">Password</label>
                    <div className='input-container form-control'>
                        <i class="fa-solid fa-key"></i>
                        <input
                            id='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=''
                            required />
                    </div>

                </div>
                {/* <div className='mb-20'>
                    <input type='checkbox' id='rememberme' />
                    <label for='rememberme'>Remember Me</label>
                </div> */}

                {/* <div className='mb-20'>
                    <button type='submit' className="btn btn-success">Log in</button>
                </div> */}

                <ButtonCmp
                    type={'submit'}
                    Children={'Log in'}
                />

            </form>

            <div className='register_container mb-20'>
                <div className='bold-text-black mb-1'>Don't have Account?
                    <span className='text-primary'> Register Online Here.</span>
                </div>
            </div>
        </div>
    )
}

export default LoginCmp;
