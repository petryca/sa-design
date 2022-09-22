(() => {


    let closeslide = document.getElementsByClassName("closeslide");
    let openslide = document.getElementsByClassName("openslide");
    let slideout = document.getElementById("slideout");


    for (var i = 0; i < closeslide.length; i++) {
        closeslide[i].addEventListener('click', function (event) {
            slideout.style.right = '-100%';
            event.preventDefault();
        });
    }

    for (var i = 0; i < openslide.length; i++) {
        openslide[i].addEventListener('click', function (event) {
            slideout.style.right = '0';
            event.preventDefault();
        });
    }


})();