const generateId = (list) => {
    let id =
        Math.floor(Math.random() * 9).toString() +
        "-" +
        Math.floor(Math.random() * 99).toString() +
        "-" +
        Math.floor(Math.random() * 999).toString() +
        "-" +
        Math.floor(Math.random() * 9999).toString()
    do {
        id =
            Math.floor(Math.random() * 9).toString() +
            "-" +
            Math.floor(Math.random() * 99).toString() +
            "-" +
            Math.floor(Math.random() * 999).toString() +
            "-" +
            Math.floor(Math.random() * 9999).toString()
    } while (list.filter((l) => l["categoryId"] == id).length !== 0)

    return id
}

const createCategory = (category, list) => {
    const slug = generateId(list)
    const title = category
    const createdAt = Date.now()

    return {
        slug: slug,
        title: title,
        createdAt: createdAt,
        notes: [],
    }
}

export { createCategory }
