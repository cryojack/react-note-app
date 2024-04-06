// Core
import { Link, useParams } from "react-router-dom"
import { useContext } from "react"

// Context
import { AppContext } from "../App"

const Notebox = ({ data }) => {
    const { category } = useParams()
    const { activeCategory, setActiveNote, formatDate, formatTitle } =
        useContext(AppContext)
    return (
        <Link
            className="note-card disp-fl fl-dir-col jc-cn ai-cn"
            to={"/" + activeCategory?.slug + "/" + data["noteId"]}
            onClick={() => setActiveNote(() => data)}
        >
            <div className="card-heading w100 disp-fl jc-cn ai-cn">
                <h3>{formatTitle(data["noteTitle"])}</h3>
                <button>x</button>
            </div>
            <div className="card-contents w100">{data["noteBody"]}</div>
            <div className="card-options w100 disp-fl fl-dir-col jc-cn ai-cn">
                <span className="card-created">
                    Created on {formatDate(data["noteCreatedAt"])}
                </span>
                <span className="card-modified">
                    Modified on {formatDate(data["noteModifiedAt"])}
                </span>
            </div>
        </Link>
    )
}

export default Notebox
