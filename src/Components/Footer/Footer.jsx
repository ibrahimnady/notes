import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-center text-white d-flex justify-content-center">

                <div className="text-center p-3 pb-0 bg-dark">
                    © 2023 Copyright:By <a className=" fw-bold text-warning" target="_blank" href="https://ibrahimnady.github.io/protofilo-official/">Ibrahim Nady</a> as a Front-End Developer
                    <section className="mb-4">
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
                </div>

                <div className="text-center p-3  bg-dark">
                    © 2023 Copyright:By <a className="fw-bold text-warning" href="https://essam1212.github.io/portfolio/">Essam Ali</a> as a Back-End Developer
                    <section className="mb-4">
                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ background: "#0082ca" }}
                            href="https://www.linkedin.com/in/essam-ali-43b0a3228"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>
                        {/* <!-- Github --> */}
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ background: "#333333" }}
                            href="https://github.com/essam1212/"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>

            </footer>
        </>
    )
}
