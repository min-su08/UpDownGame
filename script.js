const randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");
  count++;

  if(userGuess === randomNumber) {
    message.textContent = "정답! " + count +"번 만에 맞춤!  정답은 " + randomNumber +"!";
  }
  else if(userGuess < randomNumber) {
    message.textContent = "Up!";
  }
  else if(userGuess > randomNumber) {
    message.textContent = "Down";
  }
}