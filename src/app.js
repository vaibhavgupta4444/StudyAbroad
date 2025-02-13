let loader=document.querySelector(".loader");
let content=document.querySelector(".content");
content.style.display='none';

let loadContent=()=>{
   
    setTimeout(()=>{
        loader.style.display='none';
        content.style.display='block';
    },800);
}

loadContent();

let check=()=>{
    let number=document.querySelector(".mob");
    if(number.value.length!=10){
        alert("Please enter valid mobile number");
    }
}