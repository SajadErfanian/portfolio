$("#Menu-portfolio").click(function () {
    $("#Container--1").css("opacity", "1")
}),
    window.onload = function () {
        $(".Preload").fadeOut("slow", function () {
            $(".Preload").css("visibility", "hidden")
        }),
            $("body").css("overflow", "visible")
    }
    ,
    $(function () {
        $(window).scroll(function () {
            var i = $(this).scrollTop();
            $("#about").length && (i >= $("#about").offset().top - 40 && ($(".link-white").addClass("u-text-black"),
                $(".Menu--js").css("visibility", "visible"),
                $(".Menu--js").css("opacity", "1"),
                $(".Menu--main").css("visibility", "hidden"),
                $(".Menu--main").css("opacity", "0")),
                i < $("#about").offset().top - 40 && ($(".link-white").removeClass("u-text-black"),
                    $(".Menu--js").css("visibility", "hidden"),
                    $(".Menu--js").css("opacity", "0"),
                    $(".Menu--main").css("visibility", "visible"),
                    $(".Menu--main").css("opacity", "1"))),
                $(".Container--stat").length && (i >= $(".Container--stat").offset().top && ($(".Menu--js").css("visibility", "visible"),
                    $(".Menu--js").css("opacity", "1"),
                    $(".Menu--main").css("visibility", "hidden"),
                    $(".Menu--main").css("opacity", "0")),
                    i < $(".Container--stat").offset().top && ($(".Menu--js").css("visibility", "hidden"),
                        $(".Menu--js").css("opacity", "0"),
                        $(".Menu--main").css("visibility", "visible"),
                        $(".Menu--main").css("opacity", "1")))
        })
    });
