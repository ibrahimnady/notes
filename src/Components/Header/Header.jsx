import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {

    return (
        <>
            <nav className="NAV-bg navbar navbar-expand-lg " >
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3 NAV-logo " to="intro"><i className="fa-solid fa-house-user"></i></Link>
                    <div className='NAV-tab'>
                        <div className="NAV-link" >
                            {/* {
                                props.userData ? <>
                                    <div className='fw-bold fs-3'>
                                        <Link className="nav-link" to="home">My Note <i className="fa-solid fa-note-sticky"></i></Link>
                                    </div>
                                </> : ""
                            } */}
                        </div>
                        <div className="d-flex">
                            {
                                props.userData ? <>
                                    <Link to="" className=' btn btn-danger  nav-link active p-2' onClick={props.logOut}>LogOut <i className="fa-solid fa-right-from-bracket"></i></Link>
                                </> :
                                    <>
                                        <Link className="btn btn-success nav-link active me-3 p-2 text-white" to="login">Login <i className="fa-solid fa-right-to-bracket"></i></Link>
                                        <Link className="btn btn-primary nav-link active p-2 text-white" to="register">Register <i className="fa-solid fa-user-plus"></i></Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
