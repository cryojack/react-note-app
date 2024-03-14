const getCategory = (category, list) => {
    if (
        category === undefined ||
        category === null ||
        category === "" ||
        category.length < 1 ||
        list.length < 1
    ) {
        return null
    }

    const val = list.filter((l) => category == l["categoryId"])

    return val
}

export { getCategory }
