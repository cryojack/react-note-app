// Core
import { Route, Routes } from "react-router-dom"
import { createContext, useState } from "react"

// Components
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

// Data
import { data } from "./data/data"

// Functions
import { getCategory } from "./utils/functions"

// Styles
import "./App.css"

// Context
export const AppContext = createContext(null)

// App
export default function App() {
    const [categories, setCategories] = useState(data)
    const [activeCategory, setActiveCategory] = useState(null)

    return (
        <div className="note-app-container w100 h100 disp-fl jc-cn ai-cn">
            <AppContext.Provider
                value={{
                    categories,
                    setCategories,
                    activeCategory,
                    setActiveCategory,
                    getCategory,
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        index
                        element={
                            <>
                                <Sidebar />
                                <MainContent />
                            </>
                        }
                    />
                    <Route
                        path="/:category"
                        element={
                            <>
                                <Sidebar />
                                <MainContent />
                            </>
                        }
                    />
                </Routes>
            </AppContext.Provider>
        </div>
    )
}
