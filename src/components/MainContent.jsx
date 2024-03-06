const Note = () => {
    return (
        <div className="note-card disp-fl fl-dir-col jc-cn ai-cn">
            <div className="card-heading w100 disp-fl jc-cn ai-cn">
                <h3>Simple note</h3>
                <button>x</button>
            </div>
            <div className="card-contents w100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias...
            </div>
            <div className="card-options w100 disp-fl fl-dir-col jc-cn ai-cn">
                <span className="card-created">
                    Created on 06/03/2024 21:45:17
                </span>
                <span className="card-modified">
                    Modified on 06/03/2024 21:45:17
                </span>
            </div>
        </div>
    )
}

const MainContentContainer = ({ value = 20, cards = true }) => {
    const notes = []
    for (let i = 0; i < value; i++) {
        notes.push(i)
    }
    return (
        <div className="main-content-container w100 h100 disp-fl fl-dir-col jc-cn ai-cn">
            {cards === false ? (
                <>
                    <h1 className="default-header-big">
                        Welcome to NoteShare!
                    </h1>
                    <h3 className="default-header-small">
                        Start by creating or selecting a category!
                    </h3>
                    <button className="default-create-button">
                        Create category
                    </button>
                </>
            ) : (
                <>
                    <div className="note-box-header w100 disp-fl ai-cn">
                        <h1>This is category 1</h1>
                    </div>
                    <div className="note-box-contents w100 disp-fl fl-wrp jc-fs ai-st">
                        {notes.map((note, idx) => (
                            <Note />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

const MainContent = () => {
    return (
        <>
            <div className="note-main-content w100 h100">
                <MainContentContainer />
            </div>
        </>
    )
}

export default MainContent
