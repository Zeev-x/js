const app = new XMLHttpRequest();
//const sesi = "./session.txt";
//const create = "./data.php";

function view(){
  const send = document.getElementById("view");
  app.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      send.innerHTML = this.responseText;
    }
  };
  app.open("GET",sesi,true);
  app.send();
}

window.onload = view();
setInterval(function(){view()},1000);

function chat(){
  const text = document.getElementById("message").value;
  app.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      this.responseText;
    }
  };
  app.open("POST",create,true);
  app.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  app.send("data="+text);
}