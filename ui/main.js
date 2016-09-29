console.log('Loaded!');
//change the main-text
var element=document.getelementByID("main-text");
element.innerHTML='Hi I am Bhagyashree Rawal. This is my first web app.';
//move the image
var img1=document.getElementByID('madi');
var marginLeft = 0;
function moveRight()
{
    marginLeft=marginLeft + 10;
    img1.style.marginLeft=marginLeft + 'px';
}
img1.onclick = function() {
    var interval=setInterval(moveRight, 100);
    img1.style.marginLeft = '500px';
};