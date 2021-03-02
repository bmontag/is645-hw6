/*
    HW6 - Ex6
*/

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
}, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const createDictionnary = () => {
    var container = document.getElementById("content");

    var dl = document.createElement("dl");
    container.appendChild(dl);

    for (let word of words) {
        
        var dt = document.createElement("dt");
        var strong = document.createElement("strong")
        strong.innerHTML = word.term;
        dt.appendChild(strong);
        
        var dd = document.createElement("dd");
        dd.innerHTML = word.definition;

        dl.appendChild(dt)
        dl.appendChild(dd)
    }
}

createDictionnary();
