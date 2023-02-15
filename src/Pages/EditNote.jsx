import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../Styles/EditNote.css'
import { Notes } from '../Context/APIContext';
import axios from 'axios';
export default function EditNote() {
    const { getprofile, getEdit, edit, setEdit } = useContext(Notes);
    let param = useParams()
    const [Note, setNote] = useState({})
    let Navigate = useNavigate()
    useEffect(() => {
        getNotesDetails()
    }, [])
    async function getNotesDetails() {
        let { data } = await axios.get(`https://note-be.vercel.app/api/v1/note/${param.id}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
        setNote(data.mynote)
    }
    const editeNotes = async (e) => {
        e.preventDefault()
        const URL = `https://note-be.vercel.app/api/v1/note/editNote/${param.id}`;
        let { data } = await axios.patch(URL, edit, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
        setEdit(data)
        Navigate('/home')
        getprofile()
    }

    return (
        <>
            <div className='EN-bg pt-5 pb-5' >
                <form onSubmit={editeNotes} className=' EN-form container text-center '>
                    <h1 className={'mt-3 mb-5 text-white text-center'}>Edit Note</h1>
                    <div className={"form-floating mb-5 w-100 me-5 m-auto"}>
                        <input  defaultValue={Note.title}  type="text" className="form-control" id="title" name='title'  />
                        <label htmlFor="title">head Name</label>
                    </div>
                    <textarea  defaultValue={Note.desc}  rows="10" type="text" className="form-control" id="desc" name='desc' />
                    <button onClick={getEdit} type="submit" className="btn btn-success mt-3 mb-5">Edit</button>
                </form>
            </div>
        </>
    )
}
