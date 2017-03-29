$(function() {
    $("#sessions")
        .load("/static/sessions.html",
            function() {$('#session-id').text('Session Id is dynamically added with JQuery');}
            );
});