import { useParams } from "react-router-dom"
import { useContext } from "react"

// Components
import Note from "./Note"

// Context
import { AppContext } from "../App"

const MainContent = () => {
    const { category } = useParams()
    const {
        categories,
        setCategories,
        activeCategory,
        setActiveCategory,
        getCategory,
    } = useContext(AppContext)

    return (
        <>
            <div className="note-main-content w100 h100">
                {/* <div className="main-content-container w100 h100 disp-fl fl-dir-col jc-cn ai-cn">
                    {activeCategory === null || activeCategory === undefined ? (
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
                            <div className="note-box-contents w100 disp-fl fl-wrp jc-fs ai-st"></div>
                        </>
                    )}
                </div> */}
            </div>
        </>
    )
}

export default MainContent
