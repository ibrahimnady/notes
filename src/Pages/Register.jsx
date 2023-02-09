import React, { useState } from 'react'
import '../Styles/Register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';




export default function Register() {
    let Navigate = useNavigate();
    const [errorList, setErrorList] = useState([])
    const [error, setError] = useState('')
    const [isLoding, setIsLoding] = useState(false)
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        cpassword: '',
    })
    const URL = "https://note-be.vercel.app/api/v1/auth/signup"
    function getUser(e) {
        let myUser = { ...user }
        myUser[e.target.name] = e.target.value;
        setUser(myUser)
        // console.log(user);
    }
    async function submitRegister(e) {
        e.preventDefault();
        setIsLoding(true)
        let validatonResult = validateRegisterForm(user)
        if (validatonResult.error) {
            setIsLoding(false)
            console.log(validatonResult.error.details);
            setErrorList(validatonResult.error.details)
        } else {
            setIsLoding(true)
            let { data } = await axios.post(URL, user)
            // console.log(data);
            if (data.message == "Added") {
                Navigate('/login')
            } else {
                setError(data.message)
                setIsLoding(false);
            }
        }
    }
    function validateRegisterForm(user) {
        let schema = Joi.object({
            userName: Joi.string().alphanum().min(3).max(8).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(/^[A-Za-z0-9]{3,8}$/),
            cpassword: Joi.string().pattern(/^[A-Za-z0-9]{3,8}$/)
        })
        return schema.validate(user, { abortEarly: false });
    }
    return (
        <>
            <div className='RG-bg pt-5'>
                {error ? <div className="alert alert-danger">{error}</div> : ''}
                <form onSubmit={submitRegister} className=' RG-form container text-center '>
                    <h1 className={'mt-3 mb-5 text-white text-center'}>Register</h1>
                    {errorList.map((error, index) => {
                        if (index === 4) {
                            return <div key={index} className='alert alert-danger'>Password invalid</div>
                        } else {
                            return <div key={index} className='alert alert-danger'>{error.message}</div>
                        }
                    }
                    )}
                    <div className={"form-floating mb-5 w-100 me-5 m-auto"}>
                        <input onChange={getUser} type="text" className="form-control" id="userName" name='userName' placeholder='userName' />
                        <label htmlFor="userName">User Name : </label>
                    </div>
                    <div className={"form-floating mb-5 w-100 me-5 m-auto"}>
                        <input onChange={getUser} type="email" className="form-control" id="email" name='email' placeholder='email' />
                        <label htmlFor="email">Email address : </label>
                    </div>
                    <div className="form-floating w-100  m-auto">
                        <input onChange={getUser} type="password" className="form-control" id="password" name='password' placeholder='password' />
                        <label htmlFor="password">Password : </label>
                    </div>
                    <div className=" mt-5 form-floating w-100  m-auto">
                        <input onChange={getUser} type="password" className="form-control" id="cpassword" name='cpassword' placeholder='cpassword' />
                        <label htmlFor="cpassword">Confirm Password : </label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">{isLoding ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}</button>
                </form>
            </div>
        </>
    )
}
