import { Link, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"

// Components
import Note from "./Note"

// Context
import { AppContext } from "../App"

const MainContent = () => {
    const { category, note } = useParams()
    const { path, categories, activeCategory, getNotes } =
        useContext(AppContext)

    console.log(path, category, activeCategory)

    return (
        <>
            <div className="note-main-content w100 h100">
                <div className="main-content-container w100 h100 disp-fl fl-dir-col jc-cn ai-cn">
                    {activeCategory === null ||
                    activeCategory === undefined ||
                    category === undefined ||
                    path === undefined ? (
                        <>
                            <h1 className="default-header-big">
                                Welcome to NoteShare!
                            </h1>
                            <h3 className="default-header-small">
                                Start by creating or selecting a category!
                            </h3>
                            <button
                                className="default-create-button"
                                onClick={() => {
                                    console.log("clicked")
                                }}
                            >
                                Create category
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="note-box-header w100 disp-fl ai-cn">
                                <h1>{activeCategory["categoryName"]}</h1>
                            </div>
                            <div className="note-box-contents w100 disp-fl fl-wrp jc-fs ai-st">
                                {getNotes(activeCategory) !== undefined ? (
                                    getNotes(activeCategory).map(
                                        (note, idx) => (
                                            <Link
                                                key={idx}
                                                to={`/${activeCategory["categoryId"]}/${note["noteId"]}`}
                                            >
                                                <Note data={note} />
                                            </Link>
                                        )
                                    )
                                ) : (
                                    <></>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default MainContent
