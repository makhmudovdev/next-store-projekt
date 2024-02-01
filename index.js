
/* ----------------------------------- CARUSELS START ------------------------------------ */

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




let loadWrapper = document.querySelector('.load_wrapper');



window.addEventListener('DOMContentLoaded',()=>{
    loadWrapper.style.display = 'flex';
    document.body.style.overflow="hidden";
})


window.addEventListener('load',()=>{

    setTimeout( ()=>{

        loadWrapper.style.display = 'none';
        document.body.style.overflow="visible";

    } , 2000)
  
});


/* ----------------------------------- CARUSELS END ------------------------------------ */






/* ----------------------------------- LOGIN START ------------------------------------ */

let modalWrapper = document.querySelector(".modal_wrapper"),
open=document.querySelector("#login"),
close=document.querySelector("#close");


open.addEventListener("click",()=>{
    modalWrapper.style.display = "flex";
    document.body.style.overflow = "hidden";
})


close.addEventListener("click",()=>{
    modalWrapper.style.display = "none";
    document.body.style.overflow = "visible";
})

modalWrapper.addEventListener('click', (e)=>{


    if( e.target.classList.contains('modal_header') || e.target.classList.contains('modal_body') || e.target.classList.contains('modal_footer') || e.target.classList.contains('modal_title') || e.target.classList.contains("modal_submit")){
        modalWrapper.style.display = "flex";
        console.log(e.target.classList);
        document.body.style.overflow = "hidden";
    }else{
        modalWrapper.style.display = "none";
        console.log(e.target.classList)
        document.body.style.overflow = "visible";
    }

});


/* ----------------------------------- LOGIN END ------------------------------------ */



/* ----------------------------------- DROPDOWN START ------------------------------------ */

let modalWrappers = document.querySelector(".modal_wrappers"),
kirish=document.querySelector("#kirish"),
chiqish=document.querySelector("#chiqish");


kirish.addEventListener("click",()=>{
    modalWrappers.style.display = "block";
    document.body.style.overflow = "hidden";
});


chiqish.addEventListener("click",()=>{
    modalWrappers.style.display = "none";
    document.body.style.overflow = "visible";
});


/* ----------------------------------- DROPDOWN END ------------------------------------ */



/* ----------------------------------- KATALOG START ------------------------------------ */

let katalogaWrap = document.querySelector(".katalog_wrapper"),
katalog=document.querySelector("#katlog"),
clos=document.querySelector("#clos");


katalog.addEventListener("click",()=>{
    katalogaWrap.style.display = "flex";
});


clos.addEventListener("click",()=>{
    katalogaWrap.style.display = "none";
});


/* ----------------------------------- KATALOG END ------------------------------------ */



































// let modalWrappers = document.querySelector(".modal_wrappers"),
// opens=document.querySelector("#logins"),
// closes=document.querySelector("#closes");


// open.addEventListener("click",()=>{
//     modalWrappers.style.display = "flex";
//     document.body.style.overflow = "hidden";
// })


// close.addEventListener("click",()=>{
//     modalWrappers.style.display = "none";
//     document.body.style.overflow = "visible";
// })

// modalWrappers.addEventListener('click', (e)=>{


//     if( e.target.classList.contains('modal_headers') || e.target.classList.contains('modal_bodys') || e.target.classList.contains('modal_footers') || e.target.classList.contains('modal_titles') || e.target.classList.contains("modal_submits")){
//         modalWrappers.style.display = "flex";
//         console.log(e.target.classList);
//         document.body.style.overflow = "hidden";
//     }else{
//         modalWrappers.style.display = "none";
//         console.log(e.target.classList)
//         document.body.style.overflow = "visible";
//     }

// });