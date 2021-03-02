/*
    HW6 - Ex4
*/

const createTable = () => {
    var tableContainer = document.getElementById("output");

    var table = document.createElement("table");
    table.border = "1";

    var tBody = document.createElement("tbody");
    table.appendChild(tBody);

    for (var i = 1; i <= 12; i++) {
        var tr = document.createElement("tr");
        tBody.appendChild(tr);

        var td = document.createElement("td");
        tr.appendChild(td);

        var content = document.createElement("p")
        if (i % 4 == 0) {
            content.classList.add("lightblue-background");
        }
        content.style.margin = "0";
        content.style.padding = "0";
        content.innerHTML = i;
        content.style.textAlign = "center";
        td.appendChild(content);
    }
    tableContainer.appendChild(table);
}

createTable();
