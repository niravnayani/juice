import $ from "jquery";
if ($(window).width() <= 768) {
    $(".has-dropdown").click(function() {
        $(".megamenu-container").slideToggle();
    });
    $(".megamenu p").click(function() {
        
        if($(this).next(".dropdown-child").css('display') == 'block')
        {
            $(".dropdown-child").slideUp();
        }
        else {
            $(".dropdown-child").slideUp();
            $(this).next(".dropdown-child").slideToggle();
        }
    });
    $(".toggle-menu").click(function() {
        $(".logo-container").slideToggle();
    });
 }
 else {
    $(window).on("load resize", function(e) {
        $(".megamenu-container").css("top", $("header").outerHeight() + "px");
    });
    $(".dropdown").mouseenter(function() {
        $(".megamenu-container").fadeIn();
    });
    $(".dropdown").mouseleave(function() {
        $(".megamenu-container").fadeOut();
    });
 }