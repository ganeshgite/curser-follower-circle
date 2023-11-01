const main = document.querySelector(".main");
const curser = document.querySelector(".main .curser");
 main.addEventListener("mousemove",function(det){
   //  console.log(det.x , det.y)
   //  console.log(det.clientX , det.clientY)
   //  console.log(det.screenX , det.screenY)
   //  console.log(det)
    curser.style.left= det.clientX + "px"
    curser.style.top= det.clientY + "px"
 });