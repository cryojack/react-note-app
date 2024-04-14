// Core
import { Route, Routes } from "react-router-dom"
import { createContext, useState, useEffect } from "react"

// Components
import Sidebar from "./components/Sidebar"
import Welcome from "./components/Welcome"
import Category from "./components/Category"
import NewCategory from "./components/NewCategory"
import Note from "./components/Note"
import NewNote from "./components/NewNote"
import EditNote from "./components/EditNote"

// Functions
import {
    createCategory,
    createNote,
    formatTitle,
    formatBody,
    formatDate,
} from "./utils/functions"

// Data
import { data } from "./data/data"

// Styles
import "./App.css"

// Context
export const AppContext = createContext(null)

const App = () => {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(undefined)
    const [activeNote, setActiveNote] = useState(undefined)

    useEffect(() => {
        const savedNoteData = JSON.parse(localStorage.getItem("NOTE-DATA"))

        if (savedNoteData) {
            setCategories(savedNoteData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("NOTE-DATA", JSON.stringify(categories))
    }, [categories])

    const addNewCategory = (category) => {
        setCategories((prev) => {
            return [...prev, createCategory(category, categories)]
        })
    }

    const addNewNote = () => {
        const newNote = createNote(activeCategory?.notes)

        const currActiveCategory = {
            slug: activeCategory?.slug,
            title: activeCategory?.title,
            createdAt: activeCategory?.createdAt,
            notes: [
                newNote,
                ...activeCategory?.notes.filter(
                    (n) => n?.noteId != newNote?.noteId
                ),
            ],
        }

        const currCategories = [
            currActiveCategory,
            ...categories?.filter((c) => c?.slug != currActiveCategory?.slug),
        ]

        setCategories(currCategories)
        setActiveCategory(
            currCategories.filter((c) => c?.slug == currActiveCategory?.slug)[0]
        )
    }

    const editNote = (note) => {
        const currActiveCategory = {
            slug: activeCategory?.slug,
            title: activeCategory?.title,
            createdAt: activeCategory?.createdAt,
            notes: [
                note,
                ...activeCategory?.notes.filter(
                    (n) => n?.noteId != note?.noteId
                ),
            ],
        }

        const currCategories = [
            currActiveCategory,
            ...categories?.filter((c) => c?.slug != currActiveCategory?.slug),
        ]

        setCategories(currCategories)
        setActiveCategory(
            currCategories.filter((c) => c?.slug == currActiveCategory?.slug)[0]
        )
        setActiveNote(note)
    }

    const deleteNote = (note) => {
        const currActiveCategory = {
            slug: activeCategory?.slug,
            title: activeCategory?.title,
            createdAt: activeCategory?.createdAt,
            notes: [
                ...activeCategory?.notes.filter(
                    (n) => n?.noteId != note?.noteId
                ),
            ],
        }

        const currCategories = [
            currActiveCategory,
            ...categories?.filter((c) => c?.slug != currActiveCategory?.slug),
        ]

        setCategories(currCategories)
        setActiveCategory(
            currCategories.filter((c) => c?.slug == currActiveCategory?.slug)[0]
        )
        setActiveNote(note)
    }

    return (
        <AppContext.Provider
            value={{
                categories,
                activeCategory,
                activeNote,
                setCategories,
                setActiveCategory,
                setActiveNote,
                addNewCategory,
                addNewNote,
                editNote,
                deleteNote,
                formatTitle,
                formatBody,
                formatDate,
            }}
        >
            <div className="note-app-container w100 h100 disp-fl jc-cn ai-cn">
                <Sidebar />
                <Routes>
                    {/* Root path */}
                    <Route path="/">
                        <Route index element={<Welcome />} />
                        {/* /new-category */}
                        <Route path="new-category" element={<NewCategory />} />
                        {/* /9001 */}
                        <Route path=":category">
                            <Route index element={<Category />} />
                            {/* /9001/1001/new-note */}
                            <Route path="new-note" element={<NewNote />} />
                            {/* /9001/1001 */}
                            <Route path=":note">
                                <Route index element={<Note />} />
                                {/* /9001/1001/edit-note */}
                                <Route
                                    path="edit-note"
                                    element={<EditNote />}
                                />
                            </Route>
                        </Route>
                    </Route>
                    <Route path="*" element={<Welcome />} />
                </Routes>
            </div>
        </AppContext.Provider>
    )
}

export default App
