$(function () {
    //Carousel Play/Pause Button
    $(".carousel").carousel({interval: 2000, pause: "false"});
    $("#carouselButton").on("click", (function () {
       if($("#carouselButton").children("i").hasClass("fa-pause")){
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
       }
        else{
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    }));

    //JQuery for Reserve Modal
        $("#reserveButton").on("click", (function(){
            $("#reserveModal").modal("show");
            }));
    //JQuery for Login Modal
        $("#loginButton").on("click", (function(){
            $("#loginModal").modal("show");
            }));
    });
