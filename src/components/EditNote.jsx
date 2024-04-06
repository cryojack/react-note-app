// Core
import { Link, useParams } from "react-router-dom"
import { useContext, useState } from "react"

// Context
import { AppContext } from "../App"

const EditNote = () => {
    const { note } = useParams()
    const {
        categories,
        setCategories,
        activeCategory,
        setActiveCategory,
        activeNote,
        setActiveNote,
    } = useContext(AppContext)

    const [noteTitle, setNoteTitle] = useState(activeNote?.noteTitle)
    const [noteBody, setNoteBody] = useState(activeNote?.noteBody)

    return (
        <div className="note-main-content w100 h100">
            <div className="main-content-container w100 h100 disp-fl fl-dir-col ai-cn">
                <div className="note-title w100 disp-fl jc-cn ai-cn">
                    <input
                        className="edit-title"
                        type="text"
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />
                </div>
                <textarea
                    className="edit-body"
                    defaultValue={noteBody}
                    onChange={(e) => setNoteBody(e.target.value)}
                ></textarea>
                <Link
                    // to={`/${activeCategory?.slug}/${activeNote?.noteId}`}
                    className="note-edit-button"
                    onClick={() => {
                        let editedNote = {
                            noteId: activeNote?.noteId,
                            noteTitle: noteTitle,
                            noteBody: noteBody,
                            noteCreatedAt: activeNote?.noteCreatedAt,
                            noteModifiedAt: Date.now(),
                        }
                        setCategories((prev) => [
                            {
                                slug: activeCategory?.slug,
                                title: activeCategory?.title,
                                createdAt: activeCategory?.createdAt,
                                notes: [
                                    editedNote,
                                    ...activeCategory?.notes.filter((note) => {
                                        return (
                                            note?.noteId != activeNote?.noteId
                                        )
                                    }),
                                ],
                            },
                            ...prev.filter((p) => {
                                return p?.slug != activeCategory?.slug
                            }),
                        ])

                        setActiveCategory(() =>
                            categories.filter(
                                (category) =>
                                    category?.slug == activeCategory?.slug
                            )
                        )
                    }}
                >
                    Update
                </Link>
            </div>
        </div>
    )
}

export default EditNote
