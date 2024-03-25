// Core
import { Link, useParams } from "react-router-dom"
import { useContext } from "react"

// Context
import { AppContext } from "../App"

const Note = () => {
    const { note } = useParams()
    const { activeCategory } = useContext(AppContext)
    return <div className="note-main-content w100 h100"></div>
}

export default Note
