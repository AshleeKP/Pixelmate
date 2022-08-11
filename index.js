const mainTable = document.getElementById("main-table")

let selectedColor = 'pink'

const makeNewRow = () => {
    const newRow = document.createElement("tr")
    for (let i = 0; i < 24; i++) {
        const td = document.createElement("td")
        newRow.append(td)
    }
    mainTable.append(newRow)
}

const fillColor = (e) => {
    let clickedCell = e.target
    if (clickedCell.tagName === "TD") {
        clickedCell.className ? clickedCell.className = "" : clickedCell.className = selectedColor
    }
}

const setColor = (e) => selectedColor = e.target.value

// Event listenerss
const addRow = document.getElementById("add-row")
addRow.addEventListener('click', makeNewRow)

mainTable.addEventListener('click', fillColor)

const selectColor = document.getElementById("color-selector")
selectColor.addEventListener('change', setColor)
