//hero 슬라이드
let slides = document.getElementsByClassName('slide');
let currentidx = 0;

slideShow(0);

function slideShow(target){
    for(let i = 0;i < slides.length;i++){
        if(i != target){
            slides[i].classList.remove('visible');
        }else{
            slides[target].classList.add('visible');
        }
    }
}

setInterval(function(){
    let nextidx = (currentidx + 1) % slides.length;
    slideShow(nextidx);
    currentidx = nextidx;
}, 4000);
    

//text slideUp animation
let screenHeight = window.innerHeight;

window.addEventListener('scroll', function(){
    let scroll = window.pageYOffset;
    if(scroll > 100){
        document.querySelector('#tv h1').style = 'animation: slideUp 2s both;';
        document.querySelector('#tv h2').style = 'animation: slideUp 2s .2s both;';
    }
    if(scroll > document.querySelector('#download').offsetTop - screenHeight + 100){
        document.querySelector('#download h1').style = 'animation: slideUp 2s both;';
        document.querySelector('#download h2').style = 'animation: slideUp 2s .8s both;';
    }
    if(scroll > document.querySelector('#device').offsetTop - screenHeight + 150){
        document.querySelector('#device h1').style = 'animation: slideUp 2s both;';
        document.querySelector('#device h2').style = 'animation: slideUp 2s .6s both;';
    }
});


//아코디언 메뉴
//css에서 li에 open class와 close class
//각각 작성해서 html에 close class으로 초기값 설정
let item = document.getElementsByClassName('faq-item');
let btn = document.getElementsByClassName('btn');

//btn 클릭 이벤트
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', toggle);
}

//btn의 부모요소인 li의 클래스네임으로 작동하는 함수
function toggle(){
    let itemClass = this.parentNode.className;
    for(let i = 0; i < item.length; i++){
        item[i].className = 'faq-item close';
    }
    if(itemClass == 'faq-item close'){
        this.parentNode.className = 'faq-item open';
    }
}

//select language change 이벤트
//select 변경시 변경된 언어 사이트로 이동
let lang = document.getElementById('language');

lang.addEventListener('change', function(){
    if(this.value == 'en'){
        document.location = 'https://www.netflix.com/kr-en/';
    } else {
        document.location = 'https://www.netflix.com/kr/';
    }
    
});
