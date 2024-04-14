const generateId = (list, key) => {
    let id =
        Math.floor(Math.random() * 99).toString() +
        "-" +
        Math.floor(Math.random() * 999).toString() +
        "-" +
        Math.floor(Math.random() * 9999).toString()
    do {
        id =
            Math.floor(Math.random() * 99).toString() +
            "-" +
            Math.floor(Math.random() * 999).toString() +
            "-" +
            Math.floor(Math.random() * 9999).toString()
    } while (list.filter((l) => l[key] == id).length !== 0)

    return id
}

const createCategory = (title, list) => {
    return {
        slug: generateId(list, "slug"),
        title: title,
        createdAt: Date.now(),
        notes: [],
    }
}

const createNote = (list) => {
    return {
        noteId: generateId(list, "noteId"),
        noteTitle: "Untitled Note",
        noteBody: "No body",
        noteCreatedAt: Date.now(),
        noteModifiedAt: Date.now(),
    }
}

const formatTitle = (title) => {
    if (title.split("").length < 15) {
        return title
    } else {
        return title.split("").splice(0, 15).join("") + "..."
    }
}

const formatBody = (body) => {
    if (body.split("").length < 30) {
        return body
    } else {
        return body.split("").splice(0, 30).join("") + "..."
    }
}

const formatDate = (date) => {
    return new Date(date).toString().split(" ").splice(0, 5).join(" ")
}

export { createCategory, createNote, formatTitle, formatBody, formatDate }
