// Core
import { useContext, useState } from "react"

// Context
import { AppContext } from "../App"

const NewCategory = () => {
    const { categories, setCategories, createCategory } = useContext(AppContext)

    const [newCategoryName, setNewCategoryName] = useState("")
    return (
        <div className="note-main-content w100 h100">
            <div className="main-content-container w100 h100 disp-fl fl-dir-col jc-cn ai-cn">
                <h1 className="default-header-big">Create new category</h1>
                <form className="category-form disp-fl fl-dir-col">
                    <label className="category-label" htmlFor="category-input">
                        Category name
                        <input
                            id="categoryInput"
                            name="category-input"
                            className="category-input"
                            type="text"
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            autoComplete="off"
                            required
                        />
                    </label>
                    <button
                        className="category-submit"
                        onClick={(e) => {
                            e.preventDefault()
                            setCategories((prev) => {
                                return [
                                    ...prev,
                                    createCategory(newCategoryName, categories),
                                ]
                            })
                            setNewCategoryName(() => "")
                            document.getElementById("categoryInput").value = ""
                        }}
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewCategory
