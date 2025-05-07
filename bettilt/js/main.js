document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("navbar-toggler");
    const menu = document.getElementById("navbarCollapse");

    if (toggler && menu) {
        toggler.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        const navLinks = menu.querySelectorAll("a.nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth < 992) {
                    menu.classList.remove("show");
                }
            });
        });
    }

    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (cookieBanner && acceptBtn && declineBtn) {
        if (!localStorage.getItem("cookiesAccepted") && !localStorage.getItem("cookiesDeclined")) {
            cookieBanner.style.display = "flex";
        }

        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.style.display = "none";
        });

        declineBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesDeclined", "true");
            cookieBanner.style.display = "none";
        });
    }
});

