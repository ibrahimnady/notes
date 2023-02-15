import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const { createContext, useState } = require("react");
export let Notes = createContext([]);

export function NotesContextProvider(props) {
    let Navigate = useNavigate()
    const [profile, setProfile] = useState([])
    const [userName, setUserName] = useState("")
    const [disable, setDisable] = useState(false)
    const [note, setNote] = useState({
        title: "",
        desc: ""
    })
    const [edit, setEdit] = useState({
        title: "",
        desc: ""
    });

    function getNote(e) {
        let myNote = { ...note }
        myNote[e.target.name] = e.target.value;
        setNote(myNote)
        setDisable(true)

    }
    function getEdit(e) {
        let myEdit = { ...edit }
        myEdit[e.target.name] = e.target.value;
        setEdit(myEdit)
        console.log(edit);

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
        setEdit(data)
        if (data.message === "Done") {
            Navigate('/home')
        } else {
            console.log("fuck error")
        }
    }

    async function getprofile() {
        const URL = 'https://note-be.vercel.app/api/v1/note';
        let { data } = await axios.get(URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
        setProfile(data.user.notes)
        setUserName(data.user)
    }

    const deleteNote = (N) => {
        Swal.fire({
            title: `Are You Sure Delete "${N.title}" `,
            showCancelButton: true,
        }).then((data) => {
            const URL = `https://note-be.vercel.app/api/v1/note/deleteNote/${N._id}`;
            if (data.isConfirmed) {
                axios.delete(URL, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('userToken')}`
                    }
                })
                getprofile();
                setTimeout(() => {
                    window.location.reload()
                }, 3000)
            } else {
                console.log("error");
            }
        });
    }


    return <Notes.Provider value={
        {
            disable,
            note,
            setEdit,
            edit,
            getEdit,
            deleteNote,
            userName,
            getprofile,
            profile,
            getNote,
            createNote,
        }}>

        {props.children}
    </Notes.Provider>

}