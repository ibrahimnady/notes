import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {

    return (
        <>
            <nav className="NAV-bg navbar navbar-expand-lg " >
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-white" href="#">Note's</a>
                    <div className="" >
                        <form className="d-flex">
                            {/* هنا بقا المشكله انو مش بيدخل علي اللوج اوت خالص بيدخل علي الالس يبرضو ولو نقلت اللينك بتاع اللوج اوت في اي حد تانيه بره هيضرب معاك شاشة بيضه  */}
                            {
                                props.userData ? <>
                                    <Link className=' btn btn-primary nav-link active' onClick={props.logOut}>LogOut</Link>
                                </> :
                                    <>
                                        <Link className="nav-link active" to="login">Login</Link>
                                        <Link className="nav-link active" to="register">Register</Link>
                                    </>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
