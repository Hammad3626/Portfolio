document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        allowTouchMove: false,
        grabCursor: false,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        mousewheel: true,
    });

    function navigate(indx) {
        document.querySelectorAll(".links li").forEach(function (item) {
            item.classList.remove("activelink");
        });
        document.querySelectorAll(".links li")[indx].classList.add("activelink");
        swiper.slideTo(indx, 1000, true);
    }
    window.navigate = navigate;
});
