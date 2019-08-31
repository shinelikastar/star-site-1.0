/* Dark Mode */
function setModeEventListener() {
    let list = document.body.classList;
    document.getElementById('toggler').addEventListener('change', event => {
        event.target.checked ? list.add('dark-mode') : list.remove('dark-mode');
    });

}

$("#toggler").change(function () {

    // sets assets directory based on use of local or global server
    let dir = (window.location.pathname === '/shinelikastar.github.io/index.html' || window.location.pathname === '/shinelikastar.github.io/') ? '/shinelikastar.github.io/assets/narwhals/'
        : '/assets/narwhals/';
    let urlStart = 'url(';
    let path = urlStart.concat(dir);
    let urlEnd = ')';

    if ($(this).prop("checked") === true) {

        // DISCO PARTY TIME
        $(function () {
            $("#narwhalContainer")
                .mouseover(function () {
                    let nightOver = path.concat('nightOver.png', urlEnd);
                    $(this).css("background-image", nightOver);
                })
                .mouseout(function () {
                    let night = path.concat('night.png', urlEnd);
                    $(this).css("background-image", night);
                });
        });

    } else {

        // DAYTIME
        $(function () {
            $("#narwhalContainer")
                .mouseover(function () {
                    let dayOver = path.concat('dayOver.png', urlEnd);
                    $(this).css("background-image", dayOver);
                })
                .mouseout(function () {
                    let day = path.concat('day.png', urlEnd);
                    $(this).css("background-image", day);
                });
        });

    }
});