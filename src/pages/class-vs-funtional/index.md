---
title: '클래스 컴포넌트 vs 함수 컴포넌트'
date: '2019-05-10'
spoiler: '클래스 컴포넌트와 함수형 컴포넌트의 차이에 관한 글'
tags: ['React']
--- 


### 보통의 실무에서 활용차이

- `Functional Component`는 props만 가지고 화면 출력할 때 이용한다.  
 - `Class Component` 는  Api불러오거나, 라이프 사이클 로직이 필요할 떄 이용한다.  
 - `hooks`쓰면 `Functional Component` 에서 다 처리 되니까 `Functional Component`만 써도 문제 없다.  

### 둘의 차이는 hooks가 나온 시점에서 단순히 기능의 개수 차이로 설명은 안된다


 핵심적인 차이는 `Functional Component`는 렌더링된 값들을 `고정`시킨다  
: `Class Component`에서 this는 변경 가능하기 때문에 `this.props` 또한 의도치 않게 업데이트가 된다  

 읽는 시간따라서 종속관계 깨지면 버그가 발생하게된다
 
 >미리 `this.props` 값을 전달해 놓거나 하는 방법으로 버그 해결해야하는데 그런 구조가 되면 버그에 취약해진다, 생성자에 미리 바인드 해놓는 방법도 읽는 시간에 따른 문제를 해결 못하므로 대안이 아니다

 >`Class Component` 에서 이와 같은 현상 해결하려면 render() 안에 선언한 변수에 props와 state를 넣고 클로저로 감싸줘야 원하는 방식으로 작동하게 된다. 이렇게 하면 렌더할 때 props값을 고정시키는것! 하지만 굳이 이럴거면 클래스를 써야하는지 의문이 생긴다

`Functional Component`의 이벤트 핸들러는 업데이트 되더라도 이전의 render에 종속이 되어있다. 그렇기 때문에 값이 변경이 안되고 그대로 이용할 수 있다.

-> `Hooks`의 state에서 같은 원리 적용가능하다

### 참고글

[overreacted.io](https://overreacted.io/ko/how-are-function-components-different-from-classes/)  
[itnext.io](https://itnext.io/react-component-class-vs-stateless-component-e3797c7d23ab)  