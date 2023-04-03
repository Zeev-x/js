const x = new XMLHttpRequest();
const method = "GET";
//const url = "example.json"; //url file json
//const out = "result"; //Output id 
//const height = "700"

function zeev(){
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      var rand = Math.floor(Math.random()*data.length);
      var result = data[rand].img;
      var web = `<a href="${result}"><img src="${result}" height="${height}px"></a>`
      document.getElementById(out).innerHTML = web;
    }
  };
  x.send();
}
window.onload = zeev();
