import React, { useState } from 'react'
// import Style from '../Styles/Login.module.css'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';





export default function Login(props) {
    let Navigate = useNavigate();
    const [errorList, setErrorList] = useState([])
    const [isLoding, setIsLoding] = useState(false)
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const URL = "https://note-be.vercel.app/api/v1/auth/login"
    function getUser(e) {
        let myUser = { ...user }
        myUser[e.target.name] = e.target.value;
        setUser(myUser)
        // console.log(user);
    }
    async function submitLogin(e) {
        e.preventDefault();
        setIsLoding(true)
        let validatonResult = validateLoginForm(user)
        if (validatonResult.error) {
            setIsLoding(false)
            // console.log(validatonResult.error.details);
            setErrorList(validatonResult.error.details)
        } else {
            setIsLoding(true)
            let { data } = await axios.post(URL, user)
            // console.log(data);
            if (data.message == "login success") {
                localStorage.setItem('userToken', data.token)
                props.getUserData();
                Navigate('/home')
            } else {
                setError(data.message)
                setIsLoding(false)
            }
        }
    }
    function validateLoginForm(user) {
        let schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(/^[A-Za-z0-9]{3,8}$/)
        })
        return schema.validate(user, { abortEarly: false });
    }

    return (
        <>
            <div className='LG-bg pt-5' >
                <form onSubmit={submitLogin} className=' LG-form container text-center '>
                    <h1 className={'mt-3 mb-5 text-white text-center'}>Login In</h1>
                    {errorList.map((error, index) => {
                        if (index === 4) {
                            return <div key={index} className='alert alert-danger'>Password invalid</div>
                        } else {
                            return <div key={index} className='alert alert-danger'>{error.message}</div>
                        }
                    })}
                    {error ? <div className="alert alert-danger">{error}</div> : ''}
                    <div className={"form-floating mb-5 w-100 me-5 m-auto"}>
                        <input onChange={getUser} type="email" className="form-control" id="email" name='email' placeholder='email' />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating w-100  m-auto">
                        <input onChange={getUser} type="password" className="form-control" id="password" name='password' placeholder='password' />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mb-5">{isLoding ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}</button>
                    <p className='text-white  fw-bold'>If You Don't Have Account Please go to <Link to="register">Register</Link> </p>
                </form>
            </div>
        </>
    )
}
