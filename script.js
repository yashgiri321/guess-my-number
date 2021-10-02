document.querySelector('.guess').addEventListener('click', function () {
    alert('HINT.....sizes between 1 and 10');
}, {once : true});
const number = 6;
let score = 20;
let highScore =0;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        alert('chutiya phele number daal..... dimag mei landa hai kya tere');
    }
    else if (guess === number) {
        document.querySelector('body').style.backgroundColor = "#60b347";
        alert(document.querySelector('.message').textContent = 'congrulations you guess right size!!!🥳🎉🎉');
          if(score>highScore){
              highScore=score;
              document.querySelector('.highscore').textContent=highScore;
          }
    }
    else if (guess > number) {
        if(score>1) {
            document.querySelector('.message').textContent = '😂 Gandu....GREAT KHALI ka landa nhi hai mera!!! 😂';
            score = score - 5;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "😥you lost the game..so now tu ab mere landa le le ✊✊....!!!!!";
            document.querySelector('body').style.backgroundColor="red";
        }
    }
    else if (guess < number) {
        if(score>1){

        document.querySelector('.message').textContent = '😣 Bosdk....tera SIZE nhi puch hai!!!';
        score = score - 5;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "😥you lost the game..so now tu ab mere landa le le ✊✊....!!!!!";
            document.querySelector('body').style.backgroundColor="red";
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.background="none";
    document.querySelector('img').style="remove";
})