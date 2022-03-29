window.addEventListener("scroll", function() {
    var desiredElement = document.getElementById("titleHeader");
    var nextElement = document.getElementById("preceding");

    if(window.scrollY > (nextElement.offsetTop)) {
        // alert("You've scrolled past the second div");
    }

})

