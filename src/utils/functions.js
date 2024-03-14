const getCategory = (category, list) => {
    if (
        category === undefined ||
        category === null ||
        category === "" ||
        category.length < 1 ||
        list.length < 1
    ) {
        return undefined
    }

    const val = list.filter((l) => category == l["categoryId"])

    return val.length > 0 ? val : undefined
}

const getNotes = (category) => {
    if (category === undefined || category === null || category === "") {
        return undefined
    }

    return category["notes"] && category["notes"].length > 0
        ? category["notes"]
        : undefined
}

export { getCategory, getNotes }
