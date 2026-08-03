const aboutbuttonElement = document.querySelector(".aboutbutton")


if (document.querySelector(".about-body")) {
    const bodyElement = document.querySelector("body.about-body")
    const aboutheaderElement = document.querySelector(".aboutheader")
    const firsttextElement = document.querySelector(".first-text")
    const secondtextElement = document.querySelector(".second-text")
    const skillsheaderElement = document.querySelector(".skills-header")
    const skillsinfoElement = document.querySelector(".skills-info")
    const aboutrezeElement = document.querySelector(".about-reze")
    const buttonsElement = document.querySelector(".mobbuttons")
    const sidemenubuttonElement = document.querySelector("#sidemenubutton")
    const sidemenuElement = document.querySelector(".sidemenu")
    const linecssmobElement = document.querySelector("#linecssmob")

    console.log(bodyElement.outerHTML)
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

    sidemenubuttonElement.addEventListener("click", () => {
        sidemenuElement.classList.add("visible")
        bodyElement.classList.add("sidemenuopened")
        const sidemenuclosebuttonElement = document.querySelector(".sidemenu .cb-container #sidemenuclosebutton")
        sidemenuclosebuttonElement.addEventListener("click", () => {
            sidemenuElement.classList.remove("visible")
            bodyElement.classList.remove("sidemenuopened")
        })
    })
}

else {
    const bodyElement = document.querySelector("body")
    const rezeElement = document.querySelector(".reze")
    const hellotextElement = document.querySelector(".hello--text")
    const hellofooterElement = document.querySelector(".hello--footer")
    const socialElements = document.querySelectorAll(".social a")
    const h2hellofooterElements = document.querySelectorAll(".hello--footer h2")
    const headermenuElement = document.querySelector(".header-menu")
    const buttonsElement = document.querySelector(".mobbuttons")
    const sidemenubuttonElement = document.querySelector("#sidemenubutton")
    const sidemenuElement = document.querySelector(".sidemenu")

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

    sidemenubuttonElement.addEventListener("click", () => {
        sidemenuElement.classList.add("visible")
        bodyElement.classList.add("sidemenuopened")
        const sidemenuclosebuttonElement = document.querySelector(".sidemenu .cb-container #sidemenuclosebutton")
        sidemenuclosebuttonElement.addEventListener("click", () => {
            sidemenuElement.classList.remove("visible")
            bodyElement.classList.remove("sidemenuopened")
        })
    })
    
}
