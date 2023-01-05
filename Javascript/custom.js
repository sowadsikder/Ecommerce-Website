const bar = document.getElementById ('bar');
const close = document.getElementById ('close');
const nav = document.getElementById ('navber');
const slides= document.querySelectorAll('.slide');
const btns= document.querySelectorAll('.btn');
const active= document.getElementsByClassName('active');
var mainImg = document.getElementById('mainImg');
var smallimg = document.getElementsByClassName('small-img');
const currentSlide= 1;
let i = 1;

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    }

//  Javascript For Images Slider manual navigation
    
    const manualNav = function(manual){
        slides.forEach((slide) => {
            slide.classList.remove('active');

            btns.forEach((btn) => {
                btn.classList.remove('active');
            })
        })

        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }

    btns.forEach((btn , i) => {
        btn.addEventListener("click" , () =>{
            manualNav(i);
            // currentSlide = i;
        })
    });
    //Javascritp for Images autoplay navigation
    const repeat = function(activeClass){
        const repeater = () => {
            setTimeout(function(){

                [...active].forEach((activeSlide) => {
                    activeSlide.classList.remove('active')
                });
                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;

                if(slides.length == i){
                    i = 0;
                }
                if(i>= slides.length){
                    return;
                }
                repeater();
            } , 5000);
        }
        repeater();
    }
    repeat();

    //Javascript for single Products
    var mainImg = document.getElementById('mainImg');
    var smallimg = document.getElementsByClassName('small-img');
        smallimg[0].onclick= function () {
            mainImg.src = smallimg[0].src;
        }
        smallimg[1].onclick= function () {
            mainImg.src = smallimg[1].src;
        }
        smallimg[2].onclick= function () {
            mainImg.src = smallimg[2].src;
        }
        smallimg[3].onclick= function () {
            mainImg.src = smallimg[3].src;
        }