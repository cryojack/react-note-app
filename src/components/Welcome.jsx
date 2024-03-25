// Core
import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <div className="note-main-content w100 h100">
            <div className="main-content-container w100 h100 disp-fl fl-dir-col jc-cn ai-cn">
                <h1 className="default-header-big">Welcome to NoteShare!</h1>
                <h3 className="default-header-small">
                    Start by creating or selecting a <b>category</b>!
                </h3>
                <h3 className="default-header-small">
                    Create or edit <b>notes</b> in your categories!
                </h3>

                <Link to="/new-category" className="default-create-button">
                    Create category
                </Link>
            </div>
        </div>
    )
}

export default Welcome
