var clickme=document.querySelector("#change");
var container=document.querySelector("body");

clickme.addEventListener('click',()=>{

    var hexColor = '#' + Math.floor(Math.random()*16777215).toString(16);
container.style.backgroundColor=hexColor;

})