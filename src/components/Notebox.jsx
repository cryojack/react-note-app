// Core
import { Link, useParams } from "react-router-dom"
import { useContext } from "react"

// Context
import { AppContext } from "../App"

const Notebox = ({ data, isEmpty }) => {
    const { category } = useParams()
    const {
        activeCategory,
        setActiveNote,
        addNewNote,
        deleteNote,
        formatDate,
        formatTitle,
        formatBody,
    } = useContext(AppContext)
    return (
        <>
            {!isEmpty ? (
                <Link
                    className="note-card disp-fl fl-dir-col jc-cn ai-cn"
                    to={"/" + activeCategory?.slug + "/" + data["noteId"]}
                    onClick={() => setActiveNote(() => data)}
                >
                    <div className="card-heading w100 disp-fl jc-cn ai-cn">
                        <h3>{formatTitle(data["noteTitle"])}</h3>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                deleteNote(data)
                            }}
                        >
                            x
                        </button>
                    </div>
                    <div className="card-contents w100">
                        {formatBody(data["noteBody"])}
                    </div>
                    <div className="card-options w100 disp-fl fl-dir-col jc-cn ai-cn">
                        <span className="card-created">
                            Created on {formatDate(data["noteCreatedAt"])}
                        </span>
                        <span className="card-modified">
                            Modified on {formatDate(data["noteModifiedAt"])}
                        </span>
                    </div>
                </Link>
            ) : (
                <button
                    className="note-card disp-fl fl-dir-col jc-cn ai-cn"
                    onClick={addNewNote}
                >
                    <div className="card-heading w100 disp-fl jc-cn ai-cn">
                        <h3>Create a new note</h3>
                    </div>
                </button>
            )}
        </>
    )
}

export default Notebox
