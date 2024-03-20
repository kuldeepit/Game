var score=localStorage.getItem("score")

window.onload = function () {
    openend();
};

function openend() {
    var end = document.getElementById('scoreend');
    var resultTextElement = document.getElementById('resultText');

    var score1 = localStorage.getItem('score');
    var playername = localStorage.getItem('playername');

    scoreValue.textContent = 'Great, '+ playername.toUpperCase() + ' Your Score: ' + score;
    resultTextElement.textContent = getResultText(score);
    end.style.display = 'block';
   
}
