var speed;
var timemenu;
function setTab(n) {
    speed = 0;
    var pos = -330 + 72 * n;
    move(pos);
}
function move(e) {
    var divfm = document.getElementById('fmnumber');
    var divmain = document.getElementById('head');
    var curpos = divfm.offsetLeft - divmain.offsetLeft;
    clearInterval(timemenu);
    timemenu = setInterval(function () {
        curpos = divfm.offsetLeft - divmain.offsetLeft;
        //改变位置，如果向左则e==500， 向上取整， 否则向右，向下取整，速度=(终点位置 - 当前位置)/一个数
        e >= curpos ? speed = Math.ceil((e - curpos) / 10) : speed = Math.floor((e - curpos) / 10)

        if (e == curpos) {//达到，关闭定时器
            clearInterval(timemenu);
        }
        else {
            divfm.style.left = curpos + speed + 'px';
        }
    }, 30);
};