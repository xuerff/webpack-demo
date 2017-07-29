var obj = require('./tool.js');
var demo2 = {
    init: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        //var demo1 = document.getElementsByClassName('demo1')[0];
        var demo1 = obj.getDom('demo2');
        demo1.onclick = this.changeStyle;
    },
    changeStyle: function() {
        this.style.width = '300px';
        this.style.height = '300px';
        this.style.background = 'red';
        console.log('demo2');
    }
}

module.exports = demo2;