import { useContext, useEffect } from "react"

// Context
import { AppContext } from "../App"
import { Link, Outlet, useParams } from "react-router-dom"

const Sidebar = () => {
    const { category } = useParams()
    const { categories, activeCategory, setActiveCategory, getCategory } =
        useContext(AppContext)

    console.log(activeCategory)

    return (
        <>
            <div className="note-sidebar w100 h100 disp-fl fl-dir-col jc-cn ai-cn">
                <div className="sidebar-header w100 disp-fl jc-cn ai-cn">
                    <h1>Note Share</h1>
                </div>
                <div className="sidebar-list w100 disp-fl fl-dir-col ai-cn">
                    <div className="list-header w100 disp-fl jc-cn ai-cn">
                        <h2>Your categories</h2>
                    </div>
                    <div className="list-categories w100 disp-fl fl-dir-col ai-cn">
                        {categories && categories.length > 0 ? (
                            categories.map((cat, idx) => (
                                <Link
                                    key={idx}
                                    to={`/${cat["categoryId"]}`}
                                    className={`${
                                        cat["categoryId"] == activeCategory ||
                                        cat["categoryId"] == category
                                            ? "category disp-fl jc-cn ai-cn category-selected"
                                            : "category disp-fl jc-cn ai-cn"
                                    }`}
                                    onClick={() => {
                                        setActiveCategory(cat["categoryId"])
                                    }}
                                >
                                    <h3>{cat["categoryName"]}</h3>
                                </Link>
                            ))
                        ) : (
                            <h3>No Categories</h3>
                        )}
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Sidebar
