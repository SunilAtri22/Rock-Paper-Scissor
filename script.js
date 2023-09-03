let buttons = document.querySelectorAll('.btn');
let you = document.getElementById('you');
let bot = document.getElementById('bot');
let result = document.getElementById('click');

function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        bot.classList.add("shakeBot");
        you.classList.add("shakePlayer");

        setTimeout(() => {
            bot.classList.remove("shakeBot");
            you.classList.remove("shakePlayer");

            let number = getRandomNumber();
            let me = "";
            let comp = "";
            if (e.target.innerHTML == 'Rock') {
                you.src = 'image/rock.png';
                me = 'r';
            } else if (e.target.innerHTML == 'Paper') {
                you.src = 'image/paper.png';
                me = 'p';
            } else if (e.target.innerHTML == 'Scissor') {
                you.src = 'image/scisssor.png';
                me = 's';
            }
            if (number <= 33) {
                bot.src = 'image/botrock.png';
                comp = 'r';
            } else if (number > 33 && number <= 66) {
                bot.src = 'image/botpaper.png';
                comp = 'p';
            } else {
                bot.src = 'image/botscissor.png';
                comp = 's';
            }

            let gameResult;
            if ((me === 'r' && comp === 's') || (me === 'p' && comp === 'r') || (me === 's' && comp === 'p'))
                gameResult = "You won!";
            else if ((comp === 'r' && me === 's') || (comp === 'p' && me === 'r') || (comp === 's' && me === 'p'))
                gameResult = "You loss!";
            else
                gameResult = "Game Draw!";

            setTimeout(() => {
                result.textContent = gameResult;
            }, 700); // Delay result update for 1 second
        }, 499); // Delay animation reset for 599 milliseconds
    });
});
