/* Dark Mode */
function setModeEventListener() {
    let list = document.body.classList;
    document.getElementById('toggler').addEventListener('change', event => {
        event.target.checked ? list.add('dark-mode') : list.remove('dark-mode');

    });

}

$("#toggler").change(function(){

    if($(this).prop("checked") === true) {

        // DISCO PARTY TIME
        $(function() {
            $("#narwhalContainer")
                .mouseover(function() {
                    $(this).css("background-image", "url(/assets/narwhals/nightOver.png)");
                })
                .mouseout(function() {
                    $(this).css("background-image", "url(/assets/narwhals/night.png)");
                });
        });

    } else{

        // DAYTIME
        $(function() {
            $("#narwhalContainer")
                .mouseover(function() {
                    $(this).css("background-image", "url(/assets/narwhals/dayOver.png)");
                })
                .mouseout(function() {
                    $(this).css("background-image", "url(/assets/narwhals/day.png)");
                });
        });

    }
});