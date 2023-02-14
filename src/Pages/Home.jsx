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
                    {
                        profile.length ? <>
                            <div className="row g-3 p-3 ">
                                <div className='HM-btn_writeNote'>
                                    <Link to="addnote">
                                        <button className='button_create'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
                                            </span>
                                        </button>
                                    </Link>
                                </div>

                                {
                                    profile.map((N, _id) =>
                                        <div key={_id} className=" col-sm-12 col-md-3" >
                                            <div className='HM-headName '>
                                                <div className=' '>
                                                    <div className='  d-flex justify-content-between'>
                                                        <Link to={`editenote/${N._id}`}>
                                                            <button className='  btn btn-primary me-2'>
                                                                <i className="fa-solid fa-pen"></i>
                                                            </button>
                                                        </Link>
                                                        <h1 className=''>{N.title.slice(0, 10)}...</h1>
                                                        <button onClick={() => deleteNote(N)} className="btn btn-danger "><i className="  fa-solid fa-trash"></i></button>
                                                    </div>
                                                </div>
                                                <span className='HM-Date'>{N.updatedAt.slice(0, 10)}</span>
                                            </div>
                                            <div className='HM-bg-note  text-center d-flex justify-align-content-between align-align-content-center'>
                                                <div className='w-100 p-3'>
                                                    <p>{N.desc.slice(0, 250)} <Link className=' text-warning' to={`notedetails/${N._id}`}> ... Read More </Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </> : <>
                            <div className='HM-bg_writeNote'>
                                <Link to="addnote">
                                    <button className='button_create'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}
