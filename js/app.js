function preloader () {
    $(() => {
            setInterval(() => {
                let a=$('.mask');
                a.remove();
        }, 3000);
        
           
    });
 }

preloader ();
    





/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




const animItems = document.querySelectorAll('.intro__right');
if (animItems > 0) {
    function animOnScroll(params) {
        for (let index = 0; index < animItems.lenght; index++) {
            const animItem =animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
             const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }


            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <(animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
   
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.Left + scrollLeft}
    }


}








//canvas

var canvas = document.getElementById("myCanvas"), 
context = canvas.getContext("2d"),
w = canvas.width,
h=canvas.height;
 
var mouse = { x:0, y:0};


context.lineWidth = 10*2;
canvas.addEventListener("mousemove", function(e){
 
    
    
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.lineTo(mouse.x, mouse.y);
    context.strokeStyle = "#FF6A6A";
    context.stroke();
   
    context.beginPath();
    context.arc(mouse.x, mouse.y, 100, 0, 2*Math.PI);
    context.fillStyle = '#FF6A6A';
    context.fill();
});




/*context.fillStyle = "black";
context.strokeStyle = "black";
context.font = "bold 100pt Montserrat";
context.fillText("Присоединяйтесь", 20, 50);
context.font = 'bold 80px Montserrat';
context.fillText("Снизу", 20, 100);*/
