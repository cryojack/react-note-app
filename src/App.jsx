// Core
import { Route, Routes } from "react-router-dom"
import { createContext, useState } from "react"

// Components
import Sidebar from "./components/Sidebar"
import Welcome from "./components/Welcome"
import Category from "./components/Category"
import NewCategory from "./components/NewCategory"
import Note from "./components/Note"
import EditNote from "./components/EditNote"

// Functions
import { createCategory } from "./utils/functions"

// Data
import { data } from "./data/data"

// Styles
import "./App.css"

export const AppContext = createContext(null)
// Context

const App = () => {
    const [categories, setCategories] = useState(data)
    const [activeCategory, setActiveCategory] = useState(undefined)
    const [activeNote, setActiveNote] = useState(undefined)

    return (
        <AppContext.Provider
            value={{
                categories,
                activeCategory,
                activeNote,
                setCategories,
                setActiveCategory,
                setActiveNote,
                createCategory,
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
                            {/* <Route path="new-note" element={<NewNote />} /> */}
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
