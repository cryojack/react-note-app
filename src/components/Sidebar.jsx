const SidebarHeader = () => {
    return (
        <div className="sidebar-header w100 disp-fl jc-cn ai-cn">
            <h1>Note Share</h1>
        </div>
    )
}

const SidebarList = ({ value = 4 }) => {
    const categories = []
    for (let i = 0; i < value; i++) {
        categories.push(i)
    }
    return (
        <div className="sidebar-list w100 disp-fl fl-dir-col ai-cn">
            <div className="list-header w100 disp-fl jc-cn ai-cn">
                <h2>Your categories</h2>
            </div>
            <div className="list-categories w100 disp-fl fl-dir-col ai-cn">
                {categories.map((cat, idx) => (
                    <div key={idx} className="category disp-fl jc-cn ai-cn">
                        <h3>This is category {idx + 1}</h3>
                    </div>
                ))}
                {/* <div
                    key={10}
                    className="category disp-fl jc-cn ai-cn category-selected"
                >
                    <h3>This is category selected</h3>
                </div> */}
            </div>
        </div>
    )
}

const Sidebar = () => {
    return (
        <>
            <div className="note-sidebar w100 h100 disp-fl fl-dir-col jc-cn ai-cn">
                <SidebarHeader />
                <SidebarList />
            </div>
        </>
    )
}

export default Sidebar
