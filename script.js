for(let i=0;i<50;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top=Math.random()*100+"vh";

heart.style.opacity="0.5";

document.body.appendChild(heart);

}
