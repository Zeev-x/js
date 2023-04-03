window.onload = function(){
const x = new XMLHttpRequest();
const method = "GET";
//const zcr = "https://zeev-x.github.io/zee/json/ecchi.json";//url json

x.open(method,zcr,true);
x.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(x.responseText);
    var rand = Math.floor(Math.random()*data.length);
    var result = data[rand].img;
    var web = `<style>
      body {
        background-image: url("${result}");
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      </style>`;
    document.getElementById("style").innerHTML = web;
  }
};
x.send();
}