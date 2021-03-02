/*
    HW6 - Ex3
*/

//Complete code for the following function
//Display text for 400 level courses
const ex3 = () => {
    
    var allP = document.getElementsByTagName("p")

    for (let cl of allP) {
        cl.style.backgroundColor = "yellow";
        cl.style.fontWeight = "bold";
    }
}

ex3();
