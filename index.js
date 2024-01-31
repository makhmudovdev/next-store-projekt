let caruselImge = document.querySelector('.carusels__imge')
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

let img = document.querySelectorAll('.carusels__imge img');

let indx = 0;

console.log(img);

function cecBtn1() {
    indx ++ ;
    if(indx > img.length-1){
        indx = 0;
    }else if(indx < 0){
        indx = img.length-1;
    }
    caruselImge.style.transform = `translateX(${-indx * 1230}px)`;
}

function cecBtn2() {
    indx -- ;
    if(indx > img.length-1){
        indx = 0;
    }else if(indx < 0){
        indx = img.length-1;
    }
    caruselImge.style.transform = `translateX(${-indx * 1230}px)`;
}







let caruselImges = document.querySelector('.caruselt__imge')
let button1 = document.querySelector('.btns1');
let button2 = document.querySelector('.btns2');

let immages = document.querySelectorAll('.caruselt__imge img');

let indxs = 0;

console.log(immages);

function cecButton1() {
    indxs ++ ;
    if(indxs > immages.length-1){
        indxs = 0;
    }else if(indxs < 0){
        indxs = immages.length-1;
    }
    caruselImges.style.transform = `translateX(${-indxs * 1230}px)`;
}

function cecButton2() {
    indxs -- ;
    if(indxs > immages.length-1){
        indxs = 0;
    }else if(indxs < 0){
        indxs = immages.length-1;
    }
    caruselImges.style.transform = `translateX(${-indxs * 1230}px)`;
}





let caruselImgep = document.querySelector('.caruselp__imge')
let buttonp1 = document.querySelector('.btnp1');
let buttonp2 = document.querySelector('.btnp2');

let immagep = document.querySelectorAll('.caruselp__imge img');

let indxp = 0;

console.log(immagep);

function cecButtonp1() {
    indxp ++ ;
    if(indxp > immagep.length-1){
        indxp = 0;
    }else if(indxp < 0){
        indxp = immagep.length-1;
    }
    caruselImgep.style.transform = `translateX(${-indxp * 1230}px)`;
}

function cecButtonp2() {
    indxp -- ;
    if(indxp > immagep.length-1){
        indxp = 0;
    }else if(indxp < 0){
        indxp = immagep.length-1;
    }
    caruselImgep.style.transform = `translateX(${-indxp * 1230}px)`;
}