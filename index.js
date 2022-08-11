const mainTable = document.getElementById("main-table")

const makeNewRow = () => {
    const newRow = document.createElement("tr")
    for (let i = 0; i < 24; i++) {
        const td = document.createElement("td")
        newRow.append(td)
    }
    mainTable.append(newRow)
}



// Event listeners
const addRow = document.getElementById("add-row")
addRow.addEventListener('click', makeNewRow)






