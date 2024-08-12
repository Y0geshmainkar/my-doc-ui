import React, { useState } from 'react'
import InputCmp from '../common/ImputCmp'
import ButtonCmp from '../common/ButtonCmp'

function RegisterUICmp() {
    
    const [registrationData, setregistrationData] = useState({
        email: '',
        password: '',
        firstName:'',
        lastName:'',
        address:'',
        city:'',
        province:'',
        pinCode:'',
        dob:''
    });

    const handleChange = (e) => {

        const {name, value} = e.target;

        setregistrationData({
            ...registrationData,
            [name]: value,
        });
    };

    const handleSUbmit = (e) =>{
        
        e.preventDefault();

        console.log('RegData:', registrationData);
    }

    return (
        <div className='container' onSubmit={handleSUbmit}>
            <h1>Sign Up</h1>

            <label for="email">Email</label>
            <InputCmp
                leftIcon={<span role='img' aria-label='email'><i class="fa-regular fa-envelope" style={{ color: "#224957" }}></i></span>}
                id='email'
                type='email'
                value={registrationData.email}
                onChange={handleChange}
                placeholder="Email"
               
            />

            <label for="username">Name</label>
            <div className='d-flex' style={{ gap: "1rem" }}>
                <InputCmp
                    leftIcon={<span role='img' aria-label='email'><i class="fa-regular fa-user" style={{ color: "#224957" }}></i></span>}
                    id="username"
                    type='text'
                    value={registrationData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                />
                <InputCmp
                    leftIcon={<span role='img' aria-label='email'><i class="fa-regular fa-user" style={{ color: "#224957" }}></i></span>}
                    placeholder="Last Name"
                    id="username"
                    type='text'
                    value={registrationData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>

            <label for="phone">
                Enter your phone number
            </label>
            <InputCmp
                leftIcon={<span role='img' aria-label='phone'><i class="fa-solid fa-phone"></i></span>}
                placeholder="(000) 000-0000"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                id="phone"
                name="phone"
            />

            <label for="password">Password</label>
            <InputCmp
                leftIcon={<span role='img' aria-label='email'><i class="fa-solid fa-lock" style={{ color: "#224957" }}></i></span>}
                placeholder="Password"
                id="password"
                type="password"
                value={registrationData.password}
                onChange={handleChange}
            />

            <ButtonCmp
                type={"submit"}
                onclick={() => alert('click')}
                Children={"Sign up"}
            />



        </div>
    )
}

export default RegisterUICmp;
