$(document).ready(function(){

    $(function() {
        $("img")
            .mouseover(function() {
                $(this).attr("src", "assets/narwhals/dayOver.png");
            })
            .mouseout(function() {
                $(this).attr("src", "assets/narwhals/day.png");
            });
    });


    $("#toggler").change(function(){

        if($(this).prop("checked") === true) {

            // DISCO PARTY TIME
            $(function() {
                $("img")
                    .mouseover(function() {
                        $(this).attr("src", "assets/narwhals/nightOver.png");
                    })
                    .mouseout(function() {
                        $(this).attr("src", "assets/narwhals/night.png");
                    });
            });

        } else{

            // DAYTIME
            $(function() {
                $("img")
                    .mouseover(function() {
                        $(this).attr("src", "assets/narwhals/dayOver.png");
                    })
                    .mouseout(function() {
                        $(this).attr("src", "assets/narwhals/day.png");
                    });
            });

        }
    });

});