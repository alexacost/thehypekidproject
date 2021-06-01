var whoAmI = ["emociones.", "UX/UI.", "web.","apps.","fotomontajes.","ilustraciones.","Diseño Multimedial."];

var textBox = document.getElementById('text');
var cursor = document.createElement('span');
cursor.innerHTML = "&nbsp;";
textBox.appendChild(cursor);

var letters = [];
function write(i, j, arr){  
  var who = arr[i];
  if(who === undefined) return;
  if(j === who.length){
    if(i === arr.length - 1){
      setTimeout(function(){
        letters[letters.length-1].style.border = "none";
      }, 3000);
      return;
    }
    setTimeout(function(){
      del(i, arr);
    }, 2000);
    return;
  }
  
  var c = document.createElement('span');
  c.innerHTML = who.charAt(j)
  letters.push(c);
  textBox.appendChild(c);
  
  setTimeout(function(){
    j++;
    write(i,j, arr);
  }, Math.random() * 100 + 70);
}

function del(i,arr){
  if(letters.length < 1){
    i++;
    setTimeout(function(){
      write(i,0, arr);
    }, 1500);
    return;
  }
  var c = letters.pop();
  setTimeout(function(){
    textBox.removeChild(c);
    del(i, arr);
  }, Math.random() * 100 + 30);
}

setTimeout(function(){
  write(0,0, whoAmI);
}, 500);