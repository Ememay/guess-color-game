/* 
    1 : get the startGameBtn, and when it clicked the gamestart function run, 1-1 : and the "disablebutton" class add to buttn
    2 : add "showon" class to the gameBody and run insertRandomColor
    3 : get gameoptions and for those numbers + sendRandomColor @varible (to keep and use in step 6) , 3-1 : build an array for keep all random colors , 3-2: call $buildRandomColor to get random color
    4 : choose and send random color from "colorCodes" Array to $wichColor
    5 : insert random color wich gave in previous step in gameStatusArea
    6 : when gameOptios clicked, check if === randomColor (previous step) do...
    7 : restart game function (for when player win  & restartgamebtn clicked)
    */

// 1 
const startGameBtn = document.querySelector('#start-Game-Btn');
startGameBtn.addEventListener('click', () => {
    gameStart();
    startGameBtn.classList.add('disablebutton')
});

function gameStart() {
    // 2
    const gameBody = document.querySelector('.game-body');
    gameBody.classList.add('showon');
    insertRandomColor()
}
// 3
const playOptions = document.querySelectorAll('.play-option');
let sendRandomColor = '';

function insertRandomColor() {
    // 3-1
    const colorCodes = [];
    // 3-2
    for (let i = 0; i < playOptions.length; i++) {
        let randomColor = buildRandomColor();
        playOptions[i].style.backgroundColor = `#${randomColor}`;
        playOptions[i].setAttribute('data-color', `#${randomColor}`)
        colorCodes.push(randomColor);
    }
    // 4
    let chooseRandomColor = Math.floor(Math.random() * colorCodes.length);
    sendRandomColor = colorCodes[chooseRandomColor];
    wichColor(sendRandomColor);
}



/// return random color for 3-2
function buildRandomColor() {
    let colorCode = '';
    for (let o = 0; o < 3; o++) {
        let randomchooseColor = Math.floor(Math.random() * (255 + 0) - 0);
        colorCode += randomchooseColor.toString(16);
    }
    return colorCode;
}


// 5
function wichColor(color) {
    const wichcolorArea = document.querySelector('.game-status h1 span');
    wichcolorArea.innerHTML = `#${color}`;
    return color;
}

// 6
playOptions.forEach(playoption => {
    playoption.addEventListener('click', () => {
        if (playoption.getAttribute('data-color') === `#${sendRandomColor}`) {
            alert('You Win,click ok to restart the game');
            gamereset();
            for (let i = 0; i < playOptions.length; i++) {
                playOptions[i].classList.remove('fadeoptions')
            }
        } else {
            playoption.classList.add('fadeoptions');

        }
    })
})


// 7 
const restartGameBtn = document.querySelector('#Restart-game-btn');
restartGameBtn.addEventListener('click', gamereset);

function gamereset() {
    gameStart();
    for (let i = 0; i < playOptions.length; i++) {
        playOptions[i].classList.remove('fadeoptions')
    }
}

// 8
const resetGameBtn = document.querySelector('#reset-Game-Btn');
resetGameBtn.addEventListener('click', () => {
    startGameBtn.classList.remove('disablebutton');
    const gameBody = document.querySelector('.game-body');
    gameBody.classList.remove('showon');
    for (let i = 0; i < playOptions.length; i++) {
        playOptions[i].classList.remove('fadeoptions')
    }
});