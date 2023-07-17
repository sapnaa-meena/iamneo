(function() {
    $(".hamburger").on("click", function() {
        $(this).parent(".hamburger-wrapper").toggleClass("hamburger-active");
    });
}());
