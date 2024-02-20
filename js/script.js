window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active")
        /* ------- page loader -------- */
    document.querySelector(".page-loader").classList.add("fade-out")
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none"
    }, 600);
});

/* ------------ active section ----------*/

document, addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        navToggler.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            togglerNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
        }, 500);
    }
});