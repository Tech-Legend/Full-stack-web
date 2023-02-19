const area=document.querySelector("#hello");
area.addEventListener('mouseover',()=>{
    area.style.width="290px"
    area.style.height="300px"
})

area.addEventListener('mouseout',()=>{
    area.style.width="221px"
    area.style.height="225px"
})
