import React, { useContext } from 'react'
import '../Styles/AddNote.css'
import { Notes } from '../Context/APIContext';



export default function AddNote() {
    const { getNote, createNote } = useContext(Notes);

    return (
        <>
            <div className='AN-bg pt-5 pb-5' >
                <form onSubmit={createNote} className=' AN-form container text-center '>
                    <h1 className={'mt-3 mb-5 text-white text-center'}>Create Note</h1>
                    <div className={"form-floating mb-5 w-100 me-5 m-auto"}>
                        <input onChange={getNote} type="text" className="form-control" id="title" name='title' placeholder='title' />
                        <label htmlFor="title">head Note</label>
                    </div>
                    <textarea rows="10" onChange={getNote} type="text" className="form-control" id="desc" name='desc' placeholder='desc' />
                    <button type="submit" className="btn btn-success mt-3 mb-5">create</button>
                </form>
            </div>
        </>
    )
}
