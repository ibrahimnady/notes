import axios from 'axios';
import React, { useState } from 'react'
import '../Styles/AddNote.css'

export default function AddNote() {
    const [note, setNote] = useState({
        title: "",
        description: "",
    })
    function getNote(e) {
        let myNote = { ...note }
        myNote[e.target.name] = e.target.value;
        setNote(myNote)
        // console.log(note);
    }
    async function createNote(e) {
        e.preventDefault()
        const URL = '';
        let response = await axios.post(URL, note)

    }
    return (
        <>
            {/* button open model */}
            <button type="button" className="HM-btn-addNote btn btn-primary" data-bs-toggle="modal" data-bs-target="#addNote">
                <i className="fa-solid fa-file-pen fs-1"></i>
            </button>

            {/* model add note */}
            <div className="modal fade" id="addNote" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={createNote}>
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input onChange={getNote} type="text" className="form-control" id="newNote" name='title' placeholder=" " />
                                    <label htmlFor="newNote">Name Note :</label>
                                </div>
                                <div className="form-floating">
                                    <textarea onChange={getNote} className="form-control" placeholder=" " name='descrption' id="descrption"></textarea>
                                    <label htmlFor="floatingTextarea">Descrption :</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Add Note</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
