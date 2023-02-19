// var check=true;
// const change=()=>{

//     if(check === true){
//     document.getElementById('hello').src="./Events/mon-2.png"
// check=false;    
// }
//     else
//     {
//         document.getElementById('hello').src="./Events/mon-1.png"
//         check=true;
//     }
// }
var check=true;
const but=document.querySelector("#hello");
but.addEventListener('click',(e)=>{
    if(check === true){
            but.src="mon-2.png"
        check=false;   
        console.log(check) 
        }
            else
            {
               but.src="mon-1.png"
                check=true;
                console.log(check)
            }
})