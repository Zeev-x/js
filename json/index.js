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
  const url = "https://zeev-x.github.io/js/json/kiwora.json";
  
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
  const url = "https://zeev-x.github.io/js/json/albedo.json";
  
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
  const url = "https://zeev-x.github.io/js/json/cosplay.json";
  
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
  const url = "https://zeev-x.github.io/js/json/ecchi.json";
  
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
  const url = "https://zeev-x.github.io/js/json/houshou.json";
  
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
  const url = "https://zeev-x.github.io/js/json/loli.json";
  
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
  const url = "https://zeev-x.github.io/js/json/miku.json";
  
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
  const url = "https://zeev-x.github.io/js/json/neko.json";
  
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
  const url = "https://zeev-x.github.io/js/json/nino.json";
  
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
  const url = "https://zeev-x.github.io/js/json/nsfw.json";
  
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
  const url = "https://zeev-x.github.io/js/json/yor.json";
  
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
  const url = "https://zeev-x.github.io/js/json/yumeko.json";
  
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
  const url = "https://zeev-x.github.io/js/json/zero.json";
  
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
  const url = "https://zeev-x.github.io/js/json/gawr.json";
  
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
  const url = "https://zeev-x.github.io/js/json/stars.json";
  
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