/*The following set of codes are for the slider/carousel*/
const next = document.getElementsByClassName("next");
const previous = document.getElementsByClassName("prev");
const headerDiv = document.querySelector(".header-text");
const bodyDiv = document.querySelector(".body-text");
let counter = 0;

for(let btn of next) {
    btn.addEventListener("click", () => {
        counter = counter + 1;
        if(counter > 2) {
            counter = 2
        }
        headerDiv.style.transform = "translate(" + (counter) * -33.3 + "%)";
        bodyDiv.style.transform = "translate(" + (counter) * -33.3 + "%)";
        showBackground();
    })
}

for(let btn of previous) {
    btn.addEventListener("click", () => {
        counter = counter - 1;
        if(counter < 0) {
            counter = 0;
        }
        headerDiv.style.transform = "translate(" + (counter) * -33.3 + "%)";
        bodyDiv.style.transform = "translate(" + (counter) * -33.3 + "%)";
        showBackground()
    })
}

const showBackground = function () {
    if(counter === 0) {
        document.querySelector(".logo-and-nav-div").classList.add("slide-1");
        document.querySelector(".logo-and-nav-div").classList.remove("slide-2");
        document.querySelector(".logo-and-nav-div").classList.remove("slide-3")
    } 

    if(counter === 1) {
        document.querySelector(".logo-and-nav-div").classList.add("slide-2");
        document.querySelector(".logo-and-nav-div").classList.remove("slide-3");
        document.querySelector(".logo-and-nav-div").classList.remove("slide-1")
    }

    if(counter === 2) {
        document.querySelector(".logo-and-nav-div").classList.add("slide-3")
        document.querySelector(".logo-and-nav-div").classList.remove("slide-1");
        document.querySelector(".logo-and-nav-div").classList.remove("slide-2")
    }
}


/*The following set of codes are for the nav bar*/
const hideNav = function () {
    for(let listItem of document.querySelectorAll("ol li")) { //Remove active class from the list items
        listItem.classList.remove("active")
    }

    document.querySelector(".logo").classList.remove("active"); //Remove active class from the logo to hide it
    document.querySelector(".hamburger-container").classList.remove("active"); //Restore hamburger image in container
    document.querySelector(".logo-nav-items").classList.remove("active"); //Remve white background
    document.body.classList.remove("no-scroll"); //Enable page scrolling
}

const showNavItems = function () {
    for (let item of document.querySelectorAll("ol li")) { //Toggle active class for all list Items
        item.classList.toggle("active")
    }

    for (let item of document.querySelectorAll("ol li a")) { //Toggle active class for the a tags 
        item.classList.add("active")
    }
}

document.querySelector(".hamburger-container").addEventListener("click", () => { //Click event listener for the hamburger
    document.querySelector("body").classList.toggle("active");
    document.querySelector(".hamburger-container").classList.toggle("active");
    document.querySelector(".logo-nav-items").classList.toggle("active");
    document.querySelector(".logo").classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    showNavItems()
})

for (let listItem of document.querySelectorAll("ol li")) {
    listItem.addEventListener("click", hideNav )
}