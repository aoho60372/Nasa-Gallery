function onloadFunc(b, num){
    //console.log("onload " + b);
    document.querySelector(b).setAttribute('src', "images/" + num + ".jpg");
    document.querySelector(b).parentNode.setAttribute('href', 'images/' + num + '.jpg')
}

function onerrorFunc(b){
    console.log("onerror " + b);
    document.querySelector(b).parentNode.parentNode.style = "visibility: hidden";
}

var btnNext = document.querySelector('#next');
var btnPrev = document.querySelector('#prev');

btnNext.onclick = function() {
    btnPrev.style = "visibility: visible";
    btnNext.style = "visibility: hidden";

    for (var i = 1; i < 7; i++){
        var num = i + 6;
        var b = '#img' + i;
        var img = new Image();
        img.src = "images/" + num + ".jpg";
        //console.log(img.src);
        img.onload = onloadFunc(b, num);
        //img.onerror = onerrorFunc(b);
    }
}

btnPrev.onclick = function() {
    btnPrev.style = "visibility: hidden";
    btnNext.style = "visibility: visible";

    for (var i = 1; i < 7; i++){
        var b = '#img' + i;
        onloadFunc(b, i);
    }
}