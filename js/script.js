const aboutbuttonElement = document.querySelector(".aboutbutton")


if (document.querySelector(".about-body")) {
    const aboutheaderElement = document.querySelector(".aboutheader")
    const firsttextElement = document.querySelector(".first-text")
    const secondtextElement = document.querySelector(".second-text")
    const skillsheaderElement = document.querySelector(".skills-header")
    const skillsinfoElement = document.querySelector(".skills-info")
    const aboutrezeElement = document.querySelector(".about-reze")

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
    }, 100)
    
})
}

else {
    const rezeElement = document.querySelector(".reze")
    const hellotextElement = document.querySelector(".hello--text")
    const hellofooterElement = document.querySelector(".hello--footer")
    const socialElements = document.querySelectorAll(".social a")
    const h2hellofooterElements = document.querySelectorAll(".hello--footer h2")
    
    window.addEventListener("load", () => {
        rezeElement.classList.add("visible")
        hellotextElement.classList.add("visible")
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
