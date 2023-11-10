function scrollToPortfolio() {
    return $("html, body").animate({ scrollTop: $("#portfolio").offset().top }, 1e3), !1;
}
(window.onload = function () {
    $(".Preload").fadeOut("slow"), $("body").css("overflow", "visible");
}),
    $(function () {
        $("#Menu--home").addClass("animated fadeIn"),
            $(".Container--main").addClass("animated fadeIn"),
            $("#Container--main_text").addClass("animated fadeIn slow"),
            $(window).scroll(function () {
                var a = $(this).scrollTop();
                console.log(a);
                $(".Home").length
                    ? (a >= $("#portfolio").offset().top - 175 && ($(".Menu--js").css("visibility", "visible"), $(".Menu--js").css("opacity", "1"), $(".Menu--main").css("visibility", "hidden"), $(".Menu--main").css("opacity", "0")),
                        a < $("#portfolio").offset().top - 175 && ($(".Menu--js").css("visibility", "hidden"), $(".Menu--js").css("opacity", "0"), $(".Menu--main").css("visibility", "visible"), $(".Menu--main").css("opacity", "1")),
                        a > 500 && $("#Container--1").addClass("animated fadeIn"),
                        a > 1150 && $("#Container--2").addClass("animated fadeIn"),
                        a > 1826 && $("#Container--3").addClass("animated fadeIn"),
                        a > 2487 && $("#Container--4").addClass("animated fadeIn"),
                        a > 3250 &&
                        ($("#Container--5").addClass("animated fadeIn"),
                            $("#dan").addClass("animated fadeIn"),
                            $("#babylon").addClass("animated fadeIn")
                            // $("#radical").addClass("animated fadeIn"),
                            // $("#cullop").addClass("animated fadeIn"),
                            // $("#uni").addClass("animated fadeIn"),
                            // $("#recharge").addClass("animated fadeIn")
                        ),
                        a > 4300 && $("#Container--6").addClass("animated fadeIn"))
                    : $("*").css("opacity", "1");
            });
    });
