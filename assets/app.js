$(document).ready(function() {

    $("#menu-icon").click(function(event) {

        $('ul').toggleClass('active');
        event.preventDefault();

    });
});