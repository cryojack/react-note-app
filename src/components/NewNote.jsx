// Core
import { Link, useParams } from "react-router-dom"
import { useContext, useState } from "react"

// Context
import { AppContext } from "../App"

const NewNote = () => {
    const { note } = useParams()
    const {
        categories,
        setCategories,
        activeCategory,
        setActiveCategory,
        addNewNote,
    } = useContext(AppContext)

    const [newNote, setNewNote] = useState({
        noteTitle: "",
        noteBody: "",
    })

    const MAX_TITLE_LENGTH = 40
    const MAX_BODY_LENGTH = 3000

    const handleTitleChange = (event) => {
        setNewNote((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    const handleBodyChange = (event) => {
        if (event.target.value.length <= MAX_BODY_LENGTH) {
            setNewNote((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
            }))
        }
    }

    return (
        <div className="note-main-content w100 h100">
            <div className="main-content-container w100 h100 disp-fl fl-dir-col ai-cn">
                <div className="edit-note-title w100 disp-fl fl-dir-col jc-cn ai-cn">
                    <input
                        className="edit-title"
                        name="noteTitle"
                        type="text"
                        autoComplete="off"
                        placeholder="Your title here"
                        value={newNote.noteTitle}
                        onChange={handleTitleChange}
                    />
                    {newNote.noteTitle.length > MAX_TITLE_LENGTH && (
                        <span className="edit-note-title-error w100 disp-fl jc-cn ai-cn">
                            Title cannot exceed {MAX_TITLE_LENGTH} characters!!
                        </span>
                    )}
                </div>
                <div className="edit-note-body w100 disp-fl fl-dir-col jc-cn ai-cn">
                    <textarea
                        className="edit-body"
                        name="noteBody"
                        autoComplete="off"
                        placeholder="Your body here"
                        value={newNote.noteBody}
                        onChange={handleBodyChange}
                    ></textarea>
                    <span className="edit-note-body-characters">
                        {MAX_BODY_LENGTH - newNote.noteBody.length} characters
                        remaining
                    </span>
                </div>
                <Link
                    to={
                        newNote.noteTitle.length <= MAX_TITLE_LENGTH
                            ? `/${activeCategory?.slug}`
                            : "#"
                    }
                    className="edit-note-button"
                    onClick={() => {
                        if (newNote.noteTitle.length <= MAX_TITLE_LENGTH) {
                            if (
                                newNote.noteTitle.length < 1 ||
                                newNote.noteTitle == ""
                            ) {
                                setNewNote((prev) => ({
                                    ...prev,
                                    noteTitle: "Untitled note",
                                }))
                            }

                            if (
                                newNote.noteBody.length < 1 ||
                                newNote.noteBody == ""
                            ) {
                                setNewNote((prev) => ({
                                    ...prev,
                                    noteBody: "No body present",
                                }))
                            }
                            addNewNote(newNote)
                        }
                    }}
                >
                    Create
                </Link>
            </div>
        </div>
    )
}

export default NewNote
