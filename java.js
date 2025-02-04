var a = document.querySelector("h1")
var btn = document.querySelector("button")
var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
         a.innerHTML = "your bulb is on";
        a.style.backgroundColor = "yellow";
        btn.innerHTML = "on";
        flag = 1;}
    else{
         a.style.backgroundColor = "transparent";
         a.innerHTML = "your bulb is off";
         btn.innerHTML = "off";
         flag = 0;

     }

})

