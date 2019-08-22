//let colors = ['#24d05a', '#eb4888', '#10a2f5', '#e9bc3f'];
let colors = ['#51d265',  '#10a2f5', '#ff0038', '#ff5800',
    '#ffd700', '#20b2aa', '#ff5470', '#e496e4'];

let colorDict = {};
colorDict['#51d265'] = '#269437';
colorDict['#10a2f5'] = '#0669a0';
colorDict['#ff0038'] =  '#a30024';
colorDict['#ff5800'] = '#cc4600';
colorDict['#ffd700'] = '#ccac00';
colorDict['#20b2aa'] = '#1a8e88';
colorDict['#ff5470'] = '#ff1037';
colorDict['#e496e4'] = '#c131c1';

(function() {

    if (window.location.pathname === '/shinelikastar.github.io/index.html') {
        // call dark mode for main page
        setModeEventListener();
    }

    setColor();
    setColorHoverListener();

    if (window.location.pathname === '/shinelikastar.github.io/projects.html') {
        setDividerColor();
    }

    setInterval(() => {
        setDividerColor();
    }, 5000);

    setInterval(() => {
        setColor();
    }, 5000);
})();

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Function to set color of links
 */
function setColor() {

    $('.navigation a').each(function() {
        this.style.color = getRandomColor();
    });

    $('.links a').each(function() {
        this.style.color = getRandomColor();
    });
}

/**
 * Function to set color of dividers on Projects page
 */
function setDividerColor() {

    $('.project-divider').each(function() {
        $(this).css('background-color', getRandomColor());
    });

}


function setHoverListener() {
    $('a')
        .mouseover(function() {
            this.style.backgroundColor = this.style.color;
            this.style.color = '#ffffff';
        })
        .mouseout(function() {
            let saveColor = this.style.backgroundColor;
            this.style.backgroundColor = '#ffffff';
            this.style.color = saveColor;
        })
    ;
}

function setColorHoverListener() {
    Array.from(document.querySelectorAll('a, button')).forEach(e => {
        e.addEventListener('mouseover', setColor);
    });
}