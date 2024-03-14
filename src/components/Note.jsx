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

export default Note
