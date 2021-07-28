'use strict'
let number = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.getElementById("sc").textContent);
let hscore = Number(document.getElementById("Hsc").textContent);

document.getElementById("check").addEventListener("click", function () {
    const numberSelect = Number(document.getElementById("numges").value);
    if (!numberSelect) {
        document.getElementById('message').textContent = 'Enter a number';
    } else if (numberSelect === number) {
        document.getElementById('message').textContent = 'Correct number ✔';
        document.querySelector("body").style.backgroundColor = "green";
        document.getElementById("correct").value = number;
        document.getElementById("Hsc").textContent = score;

    } else if (numberSelect > number) {
        if (score > 18) {
            document.getElementById('message').textContent = 'Too high';
            document.getElementById("numges").value = ""
            score--;
            document.getElementById("sc").textContent = score;
        } else {
            document.getElementById('message').textContent = 'Your chances were finished'
        }
    } else {
        if (score > 18) {
            document.getElementById('message').textContent = 'Too low';
            document.getElementById("numges").value = ""
            score--;
            document.getElementById("sc").textContent = score;
        } else {
            document.getElementById('message').textContent = 'Youe chances were finished'
        }
    }
});
document.getElementById('again').addEventListener("click", function () {
    score = 20;
    number = Math.trunc(Math.random() * 20 + 1);
    document.getElementById('message').textContent = 'Lets Guess...';
    document.getElementById('sc').textContent = score;
    document.getElementById('numges').textContent = '';
    document.getElementById('correct').value = '?';
    document.getElementById("numges").value = "";
    document.querySelector("body").style.backgroundColor = 'rgb(168, 186, 235)';
});


