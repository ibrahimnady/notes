import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import '../Styles/Home.css'
import Swal from 'sweetalert2'
import { Notes } from '../Context/APIContext';
import { useParams } from 'react-router-dom';




export default function Home() {
    const { } = useContext(Notes);
    const [profile, setProfile] = useState([])

    async function getprofile() {
        const URL = 'https://note-be.vercel.app/api/v1/note';
        let { data } = await axios.get(URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
        setProfile(data.user.notes)
        // console.log(data)    
        // console.log(profile)
    }

    useEffect(() => {
        getprofile()
    }, []);
    console.log(profile)
    //function delete one product

    const deleteNote = (note) => {
        Swal.fire({
            title: `Are You Sure Delete "${note.title}" `,
            showCancelButton: true,
        }).then((data) => {
            const URL = `https://note-be.vercel.app/api/v1/note/deleteNote/${note._id}`;
            if (data.isConfirmed) {
                let { data } =  axios.delete(URL, {
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
                    <div className="row ">
                        {/* note's */}
                        {
                            profile.map((N, _id) =>
                                <div key={_id} className=" col-sm-12 col-md-3">
                                    <div className='HM-headName w-75'>
                                        <h1 className=''>{N.title}</h1>
                                        <span className='HM-Date'>{ }</span>
                                    </div>
                                    <div className='HM-bg-note w-75 text-center d-flex justify-align-content-between align-align-content-center'>
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
                                                    <button onClick={deleteNote} type="button" className=" btn " >
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
