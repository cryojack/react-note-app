// Core
import { Link, Outlet, useParams } from "react-router-dom"
import { useContext } from "react"

// Context
import { AppContext } from "../App"

const Sidebar = () => {
    const { categories, activeCategory, setActiveCategory } =
        useContext(AppContext)

    return (
        <>
            <div className="note-sidebar w100 h100 disp-fl fl-dir-col jc-cn ai-cn">
                <Link to="/" onClick={() => setActiveCategory(undefined)}>
                    <div className="sidebar-header w100 disp-fl jc-cn ai-cn">
                        <h1>Note Share</h1>
                    </div>
                </Link>
                <div className="sidebar-list w100 disp-fl fl-dir-col ai-cn">
                    <div className="list-header w100 disp-fl jc-cn ai-cn">
                        <h2>Your categories</h2>
                    </div>
                    <div className="list-categories w100 disp-fl fl-dir-col ai-cn">
                        {categories === undefined ||
                        categories === null ||
                        categories.length === 0 ? (
                            <h3>No categories available</h3>
                        ) : (
                            categories.map((cat, idx) => (
                                <Link
                                    key={idx}
                                    to={`/${cat?.slug}`}
                                    className={`category disp-fl jc-cn ai-cn ${
                                        activeCategory?.slug == cat?.slug &&
                                        "category-selected"
                                    }`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    <h3>{cat?.title}</h3>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Sidebar
