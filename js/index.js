
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