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
    setModeEventListener();
    setColor();
    setColorHoverListener();

    setInterval(() => {
        setColor();
    }, 5000);
})();

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor() {
    $('a').each(function() {
        this.style.color = getRandomColor();
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