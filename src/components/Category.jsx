// Core
import { Link, useParams } from "react-router-dom"
import { useContext } from "react"

// Components
import Notebox from "./Notebox"

// Context
import { AppContext } from "../App"

const Category = () => {
    const { activeCategory } = useContext(AppContext)
    return (
        <div className="note-main-content w100 h100">
            <div className="main-content-container w100 h100 disp-fl fl-dir-col jc-cn ai-cn">
                <div className="note-box-header w100 disp-fl ai-cn">
                    <h1>{activeCategory?.title}</h1>
                </div>
                <div className="note-box-contents w100 disp-fl fl-wrp jc-fs ai-st">
                    {activeCategory === undefined ||
                    activeCategory === null ||
                    activeCategory?.notes.length === 0 ? (
                        <Notebox isEmpty={true} />
                    ) : (
                        activeCategory?.notes.map((note, idx) => (
                            <Notebox key={idx} data={note} isEmpty={false} />
                        ))
                    )}
                    {activeCategory?.notes.length > 0 && (
                        <Notebox isEmpty={true} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category
