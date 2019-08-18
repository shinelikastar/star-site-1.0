$(document).ready(function(){

    $(function() {
        $("img")
            .mouseover(function() {
                $(this).attr("src", "assets/narwhals/dayOver.jpg");
            })
            .mouseout(function() {
                $(this).attr("src", "assets/narwhals/day.jpg");
            });
    });


    $("#toggler").change(function(){

        if($(this).prop("checked") === true){

            // DISCO PARTY TIME
            $(function() {
                $("img")
                    .mouseover(function() {
                        $(this).attr("src", "assets/narwhals/nightOver.jpg");
                    })
                    .mouseout(function() {
                        $(this).attr("src", "assets/narwhals/night.jpg");
                    });
            });

        }else{

            // DAYTIME
            $(function() {
                $("img")
                    .mouseover(function() {
                        $(this).attr("src", "assets/narwhals/dayOver.jpg");
                    })
                    .mouseout(function() {
                        $(this).attr("src", "assets/narwhals/day.jpg");
                    });
            });

        }
    });

});