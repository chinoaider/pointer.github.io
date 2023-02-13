let curLinkImg = [];
let curSelectImg = [];
let count = 8;

for(let i = 0; i < count; i++){
    curLinkImg[i] = new Image();
    curLinkImg[i].src = "assets/link/"+(i+1)+".png";
    curSelectImg[i] = new Image();
    curSelectImg[i].src = "assets/select/"+(i+1)+".png";
}

let curLinkTime;
let l = 0;
let elementA  = document.querySelectorAll("a");
for(let i = 0;i < elementA.length;i++) {
    elementA[i].onmouseover = function (event) {
        elementA = event.target; //鼠标每经过一个元素，就把该元素赋值给变量el
        console.log(elementA)
        curLinkTime = setInterval(function curLink() {
            if (curLinkImg != null) {
                if (l >= curLinkImg.length)
                    l = 0;
                elementA.style.cursor = 'url(' + curLinkImg[l].src + '),pointer';
                l++;
            }
        }, 200);
    }

    elementA[i].onmouseout = function () {
        clearInterval(curLinkTime);
    }
}

let curSelectTime;
let k = 0;
let body = window.document.body;

body.onmouseover = function () {
    curSelectTime = setInterval(function curSelect() {
        if (curSelectImg != null) {
            if (k >= curSelectImg.length)
                k = 0;
            body.style.cursor = 'url(' + curSelectImg[k].src + '),default';
            k++;
        }
    }, 200);
}

body.onmouseout = function (){
    clearInterval(curSelectTime);
}
