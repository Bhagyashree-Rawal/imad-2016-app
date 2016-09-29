console.log('Loaded!');
//change the main-text
var element=document.getElementById("main-text");
element.innerHTML='Hi I am Bhagyashree Rawal.\n This is my first web app.';
//move the image
var img1=document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
    marginLeft=marginLeft + 1;
    img1.style.marginLeft=marginLeft + 'px';
}
img1.onclick = function() {
    var interval=setInterval(moveRight, 50);
    img1.style.marginLeft = '500px';
    
};