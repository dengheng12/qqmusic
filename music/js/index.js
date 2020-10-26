$(function() {
    $(".list_music").hover(function() {
        console.log($(this).find(".list_menu"))
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