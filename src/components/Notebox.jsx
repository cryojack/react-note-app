// Core
import { Link, useParams } from "react-router-dom"

const Notebox = ({ data }) => {
    const { category } = useParams()
    return (
        <Link
            to={"/" + category + "/" + data["noteId"]}
            className="note-card disp-fl fl-dir-col jc-cn ai-cn"
        >
            <div className="card-heading w100 disp-fl jc-cn ai-cn">
                <h3>{data["noteTitle"]}</h3>
                <button>x</button>
            </div>
            <div className="card-contents w100">{data["noteBody"]}</div>
            <div className="card-options w100 disp-fl fl-dir-col jc-cn ai-cn">
                <span className="card-created">
                    Created on{" "}
                    {new Date(data["noteCreatedAt"])
                        .toString()
                        .split(" ")
                        .splice(0, 5)
                        .join(" ")}
                </span>
                <span className="card-modified">
                    Modified on{" "}
                    {new Date(data["noteModifiedAt"])
                        .toString()
                        .split(" ")
                        .splice(0, 5)
                        .join(" ")}
                </span>
            </div>
        </Link>
    )
}

export default Notebox
