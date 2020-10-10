$(document).ready(function() {

    $("#burger-container").click(function(event) {
        $('nav').toggleClass('active');
        event.preventDefault();
    });
});