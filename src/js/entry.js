require('../css/index.css');

var demo1 = require('../js/demo1.js');
var demo2 = require('../js/demo2.js');

demo1.init();
demo2.init();

var oImg = new Image();
oImg.src = require('../img/01.jpg');//当成模块引入图片
document.body.appendChild(oImg);

var oBox=document.createElement('div');
oBox.className='box';
document.body.appendChild(oBox);