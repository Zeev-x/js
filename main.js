const hme = document.getElementById("con_home");
const abt = document.getElementById("con_about");
const btn_hme = document.getElementById("btn_home");
const btn_abt = document.getElementById("btn_about");

function home(){
  hme.style.display = "block";
  abt.style.display = "none";
  btn_hme.style.color = "red";
  btn_abt.style.color = "black";
}
function about(){
  hme.style.display = "none";
  abt.style.display = "block";
  btn_abt.style.color = "red";
  btn_hme.style.color = "black";
}
window.onload = home();