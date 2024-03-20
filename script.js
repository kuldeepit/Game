
const button=document.getElementById("button");

button.onclick=()=>{
  var playerName = document.getElementById("playerName").value
  localStorage.setItem("playername",playerName)
  window.location.href="./game.html";
}