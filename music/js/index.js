$(function() {
    $(window).on("load", function() {
        $(".content_list").mCustomScrollbar();
    });

    console.log($(".content_list"))
    $(".list_music").hover(function() {
        $(this).find(".list_menu").stop().fadeIn(100)
        $(this).find(".list_time a").stop().fadeIn(100)
        $(this).find(".list_time span").stop().fadeOut(100)
    }, function() {
        $(this).find(".list_time span").stop().fadeIn(100)
        $(this).find(".list_menu").stop().fadeOut(100)
        $(this).find(".list_time a").stop().fadeOut(100)
    })
    $(".list_check").click(function() {
        $(this).toggleClass("list_checked")
    })



})