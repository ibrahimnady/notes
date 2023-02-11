import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-center text-white">
                {/* <!-- Grid container --> */}
                <div className="container p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ background: "#3b5998" }}
                            href="https://www.facebook.com/IbrahimNady0"
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>
                        {/* <!-- Twitter --> */}
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ background: "#55acee" }}
                            href="https://twitter.com/Ibrahim59887371"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>
                        {/* <!-- Google --> */}
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ background: "#dd4b39" }}
                            href="#"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></a>
                        {/* <!-- Instagram --> */}
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ background: "#ac2bac" }}
                            href="https://www.instagram.com/ebrahim.pop/"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>
                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ background: "#0082ca" }}
                            href="https://www.linkedin.com/in/ibrahim-nady-466b931b6/"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>
                        {/* <!-- Github --> */}
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ background: "#333333" }}
                            href="https://github.com/ibrahimnady"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}
                {/* <!-- Copyright --> */}
                <div className="text-center p-3 bg-dark">
                    © 2023 Copyright:
                    <a className="text-white" href="">By Ibrahim Nady</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    )
}
