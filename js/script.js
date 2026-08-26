const currentBodyClass = document.body.className  

function sidemenuHandler (currentBodyClass) {
    let bodyElement;
    if (currentBodyClass === "") {
        bodyElement = document.querySelector("body")
    }
    else {
        bodyElement = document.querySelector("body." + currentBodyClass)
    }
    const sidemenuElement = document.querySelector(".sidemenu")
    const sidemenubuttonElement = document.querySelector("#sidemenubutton")

    sidemenubuttonElement.addEventListener("click", () => {
        sidemenuElement.classList.add("visible")
        bodyElement.classList.add("sidemenuopened")
        const sidemenuclosebuttonElement = document.querySelector(".sidemenu .cb-container #sidemenuclosebutton")
        sidemenuclosebuttonElement.addEventListener("click", () => {
            sidemenuElement.classList.remove("visible")
            bodyElement.classList.remove("sidemenuopened")
        })
    })
};

if (document.querySelector(".about-body")) {
    sidemenuHandler(currentBodyClass);
    
    const aboutheaderElement = document.querySelector(".aboutheader")
    const firsttextElement = document.querySelector(".first-text")
    const secondtextElement = document.querySelector(".second-text")
    const skillsheaderElement = document.querySelector(".skills-header")
    const skillsinfoElement = document.querySelector(".skills-info")
    const aboutrezeElement = document.querySelector(".about-reze")
    const linecssmobElement = document.querySelector("#linecssmob")
    const aboutbuttonElement = document.querySelector(".aboutbutton")

    aboutbuttonElement.addEventListener("click", (e) => {
        e.preventDefault();
    })
    window.addEventListener("load", () => {
    aboutrezeElement.classList.add("visible")
    aboutheaderElement.classList.add("visible")
        setTimeout(() => {
            firsttextElement.classList.add("visible")
            secondtextElement.classList.add("visible")
            skillsheaderElement.classList.add("visible")
            skillsinfoElement.classList.add("visible")
            linecssmobElement.classList.add("visible")
        }, 100)
    })
}

else if (document.querySelector(".myworks-body")) {
    sidemenuHandler(currentBodyClass);

    const myworksbuttonElement = document.querySelector(".myworksbutton")
    const myworksrezeElement = document.querySelector(".myworks-reze")
    const myworkstitleElement = document.querySelector("#myworkstitle")
    const myworkstitleprimElement = document.querySelector("#myworkstitleprim")
    const myworkscardsElements = document.querySelectorAll(".myworks-card")

    myworksbuttonElement.addEventListener("click", (e) => {
        e.preventDefault();
    })

    window.addEventListener("load", () => {
        myworksrezeElement.classList.add("visible")
        myworkstitleElement.classList.add("visible")
        myworkstitleprimElement.classList.add("visible")

        myworkscardsElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("visible")
            }, 100 * index);
        })
    })
}

else {
    sidemenuHandler(currentBodyClass);

    const bodyElement = document.querySelector("body")
    const rezeElement = document.querySelector(".reze")
    const hellotextElement = document.querySelector(".hello--text")
    const socialElements = document.querySelectorAll(".social a")
    const h2hellofooterElements = document.querySelectorAll(".hello--footer h2")
    const buttonsElement = document.querySelector(".mobbuttons")

    console.log(bodyElement.outerHTML)
    window.addEventListener("load", () => {
        rezeElement.classList.add("visible")
        hellotextElement.classList.add("visible")
        buttonsElement.classList.add("visible")
        h2hellofooterElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("visible")
            }, 1000 * index);  
        })
        socialElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("visible")
            }, 150 * index);
        })
    })
}

