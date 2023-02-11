import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const { createContext, useState, useEffect } = require("react");
export let Notes = createContext([]);

export function NotesContextProvider(props) {
    let Navigate = useNavigate()

    const [note, setNote] = useState({
        title: "",
        desc: ""
    })
    function getNote(e) {
        let myNote = { ...note }
        myNote[e.target.name] = e.target.value;
        setNote(myNote)
        // console.log(note);
    }
    const createNote = async (e) => {
        e.preventDefault()
        const URL = 'https://note-be.vercel.app/api/v1/note/addNote';
        let { data } = await axios.post(URL, note, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
        setNote(data)
        // console.log(data)
        if (data.message == "Done") {
            Navigate('/home')
        } else {
            console.log("fuck error")
            // console.log(note);
        }
    }



    return <Notes.Provider value={
        {
            getNote,
            createNote,
        }}>

        {props.children}
    </Notes.Provider>

}