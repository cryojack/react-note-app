// Core
import { Link, useParams } from "react-router-dom"
import { useContext, useState } from "react"

// Context
import { AppContext } from "../App"

const EditNote = () => {
    const { note } = useParams()
    const { activeCategory, activeNote, editNote } = useContext(AppContext)

    const [currNote, setCurrNote] = useState(activeNote)

    const MAX_TITLE_LENGTH = 40
    const MAX_BODY_LENGTH = 3000

    const handleTitleChange = (event) => {
        setCurrNote((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
            noteModifiedAt: Date.now(),
        }))
    }

    const handleBodyChange = (event) => {
        if (event.target.value.length <= MAX_BODY_LENGTH) {
            setCurrNote((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
                noteModifiedAt: Date.now(),
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
                        value={currNote?.noteTitle}
                        onChange={handleTitleChange}
                    />
                    {currNote?.noteTitle.length > MAX_TITLE_LENGTH && (
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
                        value={currNote?.noteBody}
                        onChange={handleBodyChange}
                    ></textarea>
                    <span className="edit-note-body-characters">
                        {MAX_BODY_LENGTH - currNote?.noteBody.length} characters
                        remaining
                    </span>
                </div>
                <Link
                    to={
                        currNote?.noteTitle.length <= MAX_TITLE_LENGTH
                            ? `/${activeCategory?.slug}/${activeNote?.noteId}`
                            : "#"
                    }
                    className="edit-note-button"
                    onClick={() => {
                        if (currNote?.noteTitle.length <= MAX_TITLE_LENGTH) {
                            editNote(currNote)
                        }
                    }}
                >
                    Update
                </Link>
            </div>
        </div>
    )
}

export default EditNote
