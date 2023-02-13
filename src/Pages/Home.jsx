import React, { useContext, useEffect } from 'react'
import '../Styles/Home.css'
import { Notes } from '../Context/APIContext';
import { Link } from 'react-router-dom';




export default function Home() {
    const { profile, getprofile, deleteNote } = useContext(Notes);
    useEffect(() => {
        getprofile()
    }, []);

    return (
        <>
            <div className='HM-bg'>
                <div className=' container-fluid text-white text-center'>
                    <div className="row g-3 p-3 ">
                        {
                            profile.map((N, _id) =>
                                <div key={_id} className=" col-sm-12 col-md-3">
                                    <div className='HM-headName '>
                                        <h1 className=''>{N.title.slice(0, 20)}...</h1>
                                        <span className='HM-Date'>{N.updatedAt.slice(0, 10)}</span>
                                    </div>
                                    <div className='HM-bg-note  text-center d-flex justify-align-content-between align-align-content-center'>
                                        <div className='w-100 p-3'>
                                            <p>{N.desc.slice(0, 300)}...</p>
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn btn-primary " type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link to={`notedetails/${N._id}`}>
                                                        <button type="button" className=" btn " data-bs-toggle="modal" data-bs-target="#openNote">
                                                            <i className="fa-solid fa-folder-open me-3"></i>
                                                            Open
                                                        </button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`editenote/${N._id}`}>
                                                        <button type="button" className=" btn " data-bs-toggle="modal" data-bs-target="#editeNote">
                                                            <i className="fa-solid fa-pen me-3"></i>
                                                            Edit
                                                        </button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button onClick={() => deleteNote(N)} type="button" className=" btn " >
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
