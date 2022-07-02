$(document).ready(()=>{
const harmbuger = $("#menu");
const body = $("#container");
const bar = $(".bar");
const fullMenu = $(".slide-menu");


const designBtn = $("#designBtn");
const frontendBtn = $("#frontendBtn");
const backendBtn = $("#backendBtn");

const design = $("#design");
const frontend = $("#frontend");
const backend = $("#backend");




fullMenu.hide();
frontend.hide();
backend.hide();

harmbuger.click(()=>{
    // alert('menu');
    fullMenu.fadeToggle(500);
});






//design show
designBtn.click(()=>{
    design.show()
    frontend.hide();
backend.hide();
})
//design show

//frontend show
frontendBtn.click(()=>{
    design.hide()
    frontend.show();
backend.hide();
})
//frontend show

//backend show
backendBtn.click(()=>{
    design.hide()
    frontend.hide();
backend.show();
})
//backend show


})

//hireMePopUp
const hireMePopUp = $('#hireMePopUp');
const hireMeBtn = $('.hireMe');
const closeBtn = $('#closeBtn');
const bodyPage = $('body');
// console.log(bodyPage)

hireMePopUp.hide();

hireMeBtn.click(()=>{
    hireMePopUp.toggle();
})

closeBtn.click(()=>{
    hireMePopUp.toggle();
})

//hireMePopUp