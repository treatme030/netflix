## ๐ฝ NEXFLIX ์ฌ์ดํธ [redesign](https://github.com/treatme030/netflix)

## ๋๋ฉ ํ์ด์ง
 * ์ด๋ฏธ์ง ์ฌ๋ผ์ด๋
 * ์คํฌ๋กค ์๋๋ก ์ด๋์ ํ์คํธ ์๋ก ํ์ด๋์ธ
 * ๋ฒํผ์ ๋ถ๋ชจ์์๋ฅผ ์ด์ฉํ์ฌ ์๋ํ๋ ์์ฝ๋์ธ ๋ฉ๋ด
 ```javascript
  //css์์ li์ open class์ close class
  //๊ฐ๊ฐ ์์ฑํด์ html์ close class์ผ๋ก ์ด๊ธฐ๊ฐ ์ค์ 
  let item = document.getElementsByClassName('faq-item');
  let btn = document.getElementsByClassName('btn');

  //btn ํด๋ฆญ ์ด๋ฒคํธ
  for(let i = 0; i < btn.length; i++){
      btn[i].addEventListener('click', toggle);
  }

  //btn์ ๋ถ๋ชจ์์์ธ li์ ํด๋์ค๋ค์์ผ๋ก ์๋ํ๋ ํจ์
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
 * ์ธ์ด select๊ฐ ๋ณ๊ฒฝ์ ๋ณ๊ฒฝ๋ ์ธ์ด ์ฌ์ดํธ๋ก ์ด๋

  ![pnex](https://user-images.githubusercontent.com/74355328/147438716-51e696e9-1420-4ef4-bcd9-56c49f0503fa.gif)
  
## ๋ฐ์ํ

  ![nex](https://user-images.githubusercontent.com/74355328/147438984-4b674bce-013c-42e5-af96-72d33ecaf3b2.gif)
