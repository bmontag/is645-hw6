/*
    HW6 - Ex5
*/

const addLink = () => {
    var allUls = document.getElementsByTagName("ul")
    var ul = allUls[allUls.length - 1];
    var li = document.createElement("li");

    var link = document.createElement("a");
    link.innerHTML = "College of Busines";
    link.href = "https://www.csulb.edu/college-of-business";
    li.appendChild(link);

    ul.insertBefore(li, ul.children[1]);
}

addLink();
