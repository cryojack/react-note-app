// Core
import { Route, Routes } from "react-router-dom"
import { createContext } from "react"

// Components
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

// Data
import { categories } from "./data/data"

// Styles
import "./App.css"

// Context
export const AppContext = createContext(null)

// App
export default function App() {
    return (
        <div className="note-app-container w100 h100 disp-fl jc-cn ai-cn">
            <Sidebar />
            <MainContent />
        </div>
    )
}
