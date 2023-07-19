const height = "480px";
const x = new XMLHttpRequest();
const method = "GET";

function azey(){
  const url = "https://zeev-x.github.io/js/json/azey.json";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function kiwora(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/kiwora.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function albedo(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/albedo.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function cosplay(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/cosplay.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function ecchi(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/ecchi.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function houshou(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/houshou.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function loli(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/loli.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function miku(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/miku.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function neko(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/neko.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function nino(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/nino.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function nsfw(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/nsfw.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function yor(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/yor.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function yumeko(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/yumeko.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function zero(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/zero.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function gawr(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/gawr.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}
function stars(){
  const x = new XMLHttpRequest();
  const url = "https://zeev-x.github.io/js/json/stars.json";
  const method = "GET";
  
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(result){
        var web = `<a href="${result.img}"><img src="${result.img}" height="${height}"></a>`;
        document.getElementById("result").innerHTML += web;
      });
    }
  };
  x.send();
}