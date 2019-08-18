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
});