const app = new XMLHttpRequest();

function view(){
  const send = document.getElementById("view");
  app.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      send.innerHTML = this.responseText;
    }
  };
  app.open("GET","./session.txt",true);
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
  app.open("POST","./chat.php",true);
  app.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  app.send("data="+text);
}