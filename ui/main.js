console.log('Loaded!');
//change the main-text
var element=document.getElementByID('main-text');
element.innerHTML='Hi I am Bhagyashree Rawal. \n This is my first web app.';
//move the image
var img=document.getElementByID('madi');
var marginLeft = 0;
function moveRight()
{
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function() {
    var interval=setInterval(moveRight, 100);
    img.style.marginLeft = '500px';
};