import axios from 'axios';
import React, { useContext, useState } from 'react'
import '../Styles/AddNote.css'
import { Notes } from '../Context/APIContext';



export default function AddNote() {
    const { getNote, createNote } = useContext(Notes);

    return (
        <>
            <div className='AN-bg pt-5' >
                <form onSubmit={createNote} className=' AN-form container text-center '>
                    <h1 className={'mt-3 mb-5 text-white text-center'}>Creat Note</h1>
                    <div className={"form-floating mb-5 w-100 me-5 m-auto"}>
                        <input onChange={getNote} type="text" className="form-control" id="title" name='title' placeholder='title' />
                        <label htmlFor="title">head Note</label>
                    </div>
                    <div className="form-floating w-100  m-auto">
                        <textarea onChange={getNote} type="text" className="form-control" id="desc" name='desc' placeholder='desc' />
                        <label htmlFor="desc">Description</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mb-5">creat</button>
                    
                </form>
            </div>
        </>
    )
}
