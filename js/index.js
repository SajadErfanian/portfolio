
$(document).ready(function () {
    $('a').smoothScroll();
})

$(".alphaders .open").click(function () {
    $(".alphaders .right").css("width", "75vw")
    $(".alphaders .left").css("width", "25vw");
    $(".alphaders .add-animate").addClass("add");
    $(".alphaders .close").addClass("rotate").css("display", "flex");
    $(this).fadeOut(150);
    $(".alphaders .close").fadeIn();
    $(".alphaders .blur").addClass("active");


});
$(".alphaders .close").click(function () {
    $(".alphaders .right").css("width", "65vw");
    $(".alphaders .left").css("width", "35vw");
    $(".alphaders .add-animate").removeClass("add");
    $(this).fadeOut(230);
    $(".alphaders .open").fadeIn();
    $(".alphaders .blur").removeClass("active");

});
// 
$(".dynoapp .open").click(function () {
    $(".dynoapp .right").css("width", "75vw")
    $(".dynoapp .left").css("width", "25vw");
    $(".dynoapp .add-animate").addClass("add");
    $(".dynoapp .close").addClass("rotate").css("display", "flex");
    $(this).fadeOut(150);
    $(".dynoapp .close").fadeIn();
    $(".dynoapp .blur").addClass("active");

});
$(".dynoapp .close").click(function () {

    $(".dynoapp .right").css("width", "65vw");
    $(".dynoapp .left").css("width", "35vw");
    $(".dynoapp .add-animate").removeClass("add");
    $(this).fadeOut(230);
    $(".dynoapp .open").fadeIn();
    $(".dynoapp .blur").removeClass("active");

});
// 
$(".onlineshop .open").click(function () {
    $(".onlineshop .right").css("width", "75vw")
    $(".onlineshop .left").css("width", "25vw");
    $(".onlineshop .add-animate").addClass("add");
    $(".onlineshop .close").addClass("rotate").css("display", "flex");
    $(this).fadeOut(150);
    $(".onlineshop .close").fadeIn();
    $(".onlineshop .blur").addClass("active");

});
$(".onlineshop .close").click(function () {

    $(".onlineshop .right").css("width", "65vw");
    $(".onlineshop .left").css("width", "35vw");
    $(".onlineshop .add-animate").removeClass("add");
    $(this).fadeOut(230);
    $(".onlineshop .open").fadeIn();
    $(".onlineshop .blur").removeClass("active");

});