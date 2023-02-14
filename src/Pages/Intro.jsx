import React, { useContext, useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import Type from '../Components/Type'
import '../Styles/Intro.css'
import { Link } from 'react-router-dom';
import { Notes } from './../Context/APIContext';




export default function Intro(props) {
    const {profile, userName, getprofile } = useContext(Notes);
    // console.log(userName);

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
                            <p className=' text-black fs-2 fw-bold'> Hello, <span className=' text-black fs-1'>{userName.userName}</span></p>
                            <p className=' text-black fs-3 fw-bold'> Your Email: <span className=' text- fs-3'>{userName.email}</span></p>
                            <p className=' text-black fs-2 fw-bold'> Count your Note's =  <span className=' text-success fs-1'>{profile.length}</span></p>

                            <Link to="home" className='' ><button className=' button_create btn btn-info fw-bold  me-3'>
                                <span>
                                    <i className="fa-solid fa-note-sticky me-2" />
                                    View Note
                                </span></button></Link>
                            <Link to="addnote" className='' ><button className=' button_create btn btn-info fw-bold '><span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create Note
                            </span></button></Link>
                        </> : <>
                            <p className=' text-black fs-1 fw-bold'> Please register first <br /> if you are not a member</p>
                            <Link to="login" className='me-2' ><button className=' button_create btn btn-info fw-bold  me-3'>
                                <span>
                                    Sign In
                                </span></button></Link>
                            <Link to="register" className='' ><button className=' button_create btn btn-info fw-bold  me-3'>
                                <span>
                                    Sign Up
                                </span></button></Link>

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
