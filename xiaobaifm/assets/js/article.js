// var time2;
// clearInterval(time2);
// time2 = setInterval(function () {
//     var description = "";
//     for (var i in timeart) {
//         var property = timeart[i];
//         description += i + " = " + property + "\n";
//     }
//     document.getElementById("test").innerHTML = description;
// }, 30);

var timeart = { article0: 0 };

//第一个参数是移的位置，二个参数是移动图片的字符串编号例如'02'
function readallmove(e, number) {
    var speed = 0;
    var artid = "article" + number;
    var divimg = document.getElementById("readallimg" + number);
    var curpos = divimg.offsetLeft;

    if (artid in timeart) {
        clearInterval(timeart[artid]);
    }
    timeart[artid] = setInterval(function () {
        curpos = divimg.offsetLeft;
        //改变位置，如果向左则e==500， 向上取整， 否则向右，向下取整，速度=(终点位置 - 当前位置)/一个数
        e >= curpos ? speed = Math.ceil((e - curpos) / 5) : speed = Math.floor((e - curpos) / 5)

        if (e == curpos) {//达到，关闭定时器
            clearInterval(timeart[artid]);
        }
        else {
            divimg.style.left = curpos + speed + 'px';
        }
    }, 30);

};
 
function imgbigger(number) {
    var imgid = "img"+number;
    var artimg = document.getElementById(imgid);
    if (imgid in timeart) {
        clearInterval(timeart[imgid]);
    }
    timeart[imgid] = setInterval(function () {
        if (artimg.width < 240) {
            artimg.width += 4;
            artimg.height += 3;
            artimg.style.marginLeft = parseInt(artimg.style.marginLeft) - 2 + "px";
            artimg.style.marginTop = parseInt(artimg.style.marginTop) - 1 + "px";
        } else { clearInterval(timeart[imgid]); }
    }, 30);
}
function imgsmaller(number) {
    var imgid = "img"+number;
    var artimg = document.getElementById(imgid);
    if (imgid in timeart) {
        clearInterval(timeart[imgid]);
    }
    timeart[imgid] = setInterval(function () {
        if (artimg.width > 200) {
            artimg.width -= 4;
            artimg.height -= 3;
            artimg.style.marginLeft = parseInt(artimg.style.marginLeft) + 2 + "px";
            artimg.style.marginTop = parseInt(artimg.style.marginTop) + 1 + "px";
        } else { clearInterval(timeart[imgid]); }
    }, 30);
}