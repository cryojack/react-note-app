export function createCategory(category, list) {
    if (
        category === undefined ||
        category === "" ||
        category === null ||
        list.length < 1
    )
        return

    if (
        list.find((cat) => {
            return cat === category
        })
    )
        return

    list.push(category)
    console.log(list)
}
