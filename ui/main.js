console.log('Loaded!');
//change the main-text
var element=document.getElementByID('main-text');
element.innerHTML='Hi I am Bhagyashree Rawal. \n This is my first web app.';
//move the image
var img=document.getElementByID('madi');
img.onclick = function() {
    var interval=setInterval(moveLeft,100);
    img.style.marginLeft = '500px';
};