/*
    HW6 - Ex2
*/

//Complete code for the following function
//Display text for 400 level courses
const displayText400 = () => {
    
    var classes400 = document.getElementsByClassName("400level")

    for (let cl of classes400) {
        console.log(cl.innerHTML);
    }
}

displayText400();
