import React, { useContext, useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import Type from '../Components/Type'
import '../Styles/Intro.css'
import { Link } from 'react-router-dom';
import { Notes } from './../Context/APIContext';




export default function Intro(props) {
    const { userName, getprofile } = useContext(Notes);

    useEffect(() => {
        getprofile()
    }, []);

    return (
        <>
            <div className='IN-bg '>
                <div className='IN-headName '>
                    <h1>
                        <Type />
                    </h1>
                </div>
                <div className='IN-body text-center mt-5'>
                    {
                        props.userData ? <>
                            <p className=' text-black fs-2 fw-bold'> Wellcom , <span className=' text-black fs-1'>{userName.userName}</span></p>
                            <Link to="home" className='' ><button className=' btn btn-info fw-bold fs-1 me-3'>View </button></Link>
                            <Link to="addnote" className='' ><button className=' btn btn-info fw-bold fs-1'>Create </button></Link>
                        </> : <>
                            <p className=' text-black fs-1 fw-bold'> Please register first <br /> if you are not a member</p>
                            <Link to="login" className='me-2' ><button className='btn btn-success  fs-1'>Sign In</button></Link>
                            <Link to="register" className='' ><button className=' btn btn-primary fs-1'>Sign Up</button></Link>
                        </>
                    }
                </div>

            </div>
            <div className=''>
                <Footer />
            </div>

        </>
    )
}
