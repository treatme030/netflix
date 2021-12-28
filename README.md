## 📽 NEXFLIX 사이트 [redesign](https://github.com/treatme030/netflix)

## 랜딩 페이지
 * 이미지 슬라이드
 * 스크롤 아래로 이동시 텍스트 위로 페이드인
 * 버튼의 부모요소를 이용하여 작동하는 아코디언 메뉴
 ```javascript
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
  ```
 * 언어 select값 변경시 변경된 언어 사이트로 이동

  ![pnex](https://user-images.githubusercontent.com/74355328/147438716-51e696e9-1420-4ef4-bcd9-56c49f0503fa.gif)
  
## 반응형

  ![nex](https://user-images.githubusercontent.com/74355328/147438984-4b674bce-013c-42e5-af96-72d33ecaf3b2.gif)
