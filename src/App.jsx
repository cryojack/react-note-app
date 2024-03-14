// Core
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { createContext, useState } from "react"

// Components
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

// Data
import { data } from "./data/data"

// Functions
import { getCategory, getNotes } from "./utils/functions"

// Styles
import "./App.css"

// Context
export const AppContext = createContext(null)

// App
const App = () => {
    const [categories, setCategories] = useState(data)
    const [activeCategory, setActiveCategory] = useState(undefined)

    const path = useLocation()["pathname"].substr(1) || undefined

    return (
        <div className="note-app-container w100 h100 disp-fl jc-cn ai-cn">
            <AppContext.Provider
                value={{
                    path,
                    categories,
                    activeCategory,
                    setActiveCategory,
                    getCategory,
                    getNotes,
                }}
            >
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={
                                <>
                                    <Sidebar />
                                    <MainContent />
                                </>
                            }
                        />
                        <Route path=":category">
                            <Route
                                index
                                element={
                                    <>
                                        <Sidebar />
                                        <MainContent />
                                    </>
                                }
                            />
                            <Route
                                path=":note"
                                element={
                                    <>
                                        <Sidebar />
                                        <MainContent />
                                    </>
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </AppContext.Provider>
        </div>
    )
}

export default App
