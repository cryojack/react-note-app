// Core
import { Link, useParams } from "react-router-dom"
import { useContext } from "react"

// Context
import { AppContext } from "../App"

const Note = () => {
    const { note } = useParams()
    const { activeNote, formatTitle } = useContext(AppContext)

    return (
        <div className="note-main-content w100 h100">
            <div className="main-content-container w100 h100 disp-fl fl-dir-col ai-cn">
                <div className="note-title w100 disp-fl jc-cn ai-cn">
                    <h1>{formatTitle(activeNote?.noteTitle)}</h1>
                </div>
                <div className="note-body">
                    <p>{activeNote?.noteBody}</p>
                </div>
                <Link to="edit-note" className="note-edit-button">
                    Edit
                </Link>
            </div>
        </div>
    )
}

export default Note
