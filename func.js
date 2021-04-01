// document.querySelector("body").addEventListener("mousemove", eyeball);

// function eyeball() {
//     var eye = document.querySelectorAll(".eye");
//     eye.forEach(function(eye) {
//         let x = (eye.getBoundingClientrect().left) + (eye.clientWidth / 2);
//         let y = (eye.getBoundingClientrect().top) + (eye.clientHeight / 2);
//         let radian = Math.atan2(Event.pageX - x, Event.pageY - y);
//         let rot = (radian * (180 / Math.PI) * -1) + 0;
//         eye.style.transform = "rotate(" + rot + "deg )";
//     });
// }
var balls= document.getElementByClassName("eye");
document.onmousemove=function(){
    var x=Event.clientX*100/window.innerWidth+"%";
    var y=Event.clientY*100/window.innerHeight+"%";
    ///////////////
    for(var i=0;i<2;i++){
        balls[i].style.left=x;
        balls[i].style.top=y;
        balls[i].style.transform="translate(-"+x+",-"+y+")";
    }
}
