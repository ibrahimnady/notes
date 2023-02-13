import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../Styles/NoteDetails.css'

export default function NoteDetails() {
    let params = useParams()
    const [Ndetails, setNdetails] = useState({});

    useEffect(() => {
        getNotesDetails()
    }, [])

    async function getNotesDetails() {
        let { data } = await axios.get(`https://note-be.vercel.app/api/v1/note/${params.id}/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
        setNdetails(data.mynote)
    }

    return (
        <>
            <div className='ND-bg'>
                <div className='text-center ND-body'>
                    <h1 className='text-black fw-bold ND-title'>{Ndetails.title}</h1>
                    <p className='text-black  ND-desc'>{Ndetails.desc}</p>
                </div>
            </div>
        </>
    )
}
