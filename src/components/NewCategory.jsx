// Core
import { useContext, useState } from "react"

// Context
import { AppContext } from "../App"

const NewCategory = () => {
    const { addNewCategory } = useContext(AppContext)
    const [newCategoryName, setNewCategoryName] = useState("")

    const MAX_CATEGORY_TITLE_LENGTH = 20

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
                    {newCategoryName.length > MAX_CATEGORY_TITLE_LENGTH && (
                        <span className="category-error w100 disp-fl jc-cn ai-cn">
                            Category name is very long!!
                        </span>
                    )}
                    <button
                        className="category-submit"
                        disabled={
                            newCategoryName.length >
                                MAX_CATEGORY_TITLE_LENGTH ||
                            newCategoryName.length < 1
                        }
                        onClick={(e) => {
                            e.preventDefault()
                            addNewCategory(newCategoryName)
                            setNewCategoryName("")
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
