import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import '../Styles/Home.css'
import Swal from 'sweetalert2'
import { Notes } from '../Context/APIContext';
import { useParams } from 'react-router-dom';




export default function Home() {
    const { profile, getprofile } = useContext(Notes);
    let praams = useParams()


    useEffect(() => {
        getprofile()
    }, []);
    // function delete one product
    console.log(profile.length);

    const deleteNote = () => {
        Swal.fire({
            title: `Are You Sure Delete "${profile.title}" `,
            showCancelButton: true,
        }).then((data) => {
            const URL = `https://note-be.vercel.app/api/v1/note/deleteNote/`;
            if (data.isConfirmed) {
                axios.delete(URL, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('userToken')}`
                    }
                })
            } else {
                console.log("error");
            }
        });
    }



    return (
        <>
            <div className='HM-bg'>
                <div className=' container-fluid text-white text-center'>
                    <div className="row g-3 p-3 ">
                        {/* note's */}
                        {
                            profile.map((N, _id) =>
                                <div key={_id} className=" col-sm-12 col-md-3">
                                    <div className='HM-headName '>
                                        <h1 className=''>{N.title}</h1>
                                        <span className='HM-Date'>{ }</span>
                                    </div>
                                    <div className='HM-bg-note  text-center d-flex justify-align-content-between align-align-content-center'>
                                        <div className='w-100'>
                                            <p>{N.desc}</p>
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn btn-primary " type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <button type="button" className=" btn " data-bs-toggle="modal" data-bs-target="#openNote">
                                                        <i className="fa-solid fa-folder-open me-3"></i>
                                                        Open
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" className=" btn " data-bs-toggle="modal" data-bs-target="#editeNote">
                                                        <i className="fa-solid fa-pen me-3"></i>
                                                        Edit
                                                    </button>
                                                </li>
                                                <li>
                                                    <button onClick={() => deleteNote()} type="button" className=" btn " >
                                                        <i className="fa-solid fa-trash me-3"></i>
                                                        Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
