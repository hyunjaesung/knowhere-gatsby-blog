---
title: '자바스크립트 필수개념 정리'
date: '2019-05-14'
spoiler: '자바스크립트의 개요, 호이스팅, 비동기, 객체지향, 이벤트, 실행컨텍스트, 이벤트루프 등 에 관한 글'
tags: ['javascript']
--- 



### 자바스크립트의 역사, 개요 ###  
  
- 이름이 자바스크립트인 이유는 자바의 인기에 편승하려는 시도에서 그렇게 되었다
- ECMA는 학술기관 이름, 주로 자바스크립트 버전에 쓰는 ES 는 ESMAScript의 줄인 말이다.
- 자바스크립트는 함수형 프로그래밍 패러다임하에서 만들어 졌다.
- 단일스레드 기반으로 구동된다.
- JS는 주로 클라이언트용 인터페이스에 이용, 웹브라우저에서 제공되는 DOM API로 사용된다.
- DOM (Document Object Model)-> html문서에 접근하는 API를 뜻하는 용어이다.
- CommonJS : JS를 다양한 환경에서 이용하고자 하는 움직임이다. 대표적으로 node.js이 있다.
  
**참고글**  
[1](https://namu.wiki/w/JavaScript?from=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)

### var, const, let과 호이스팅 ###



**호이스팅** : 자바스크립트를 인터프리터가 로드할때 변수(_일반적으로 var_)의 선언을 항상 Scope(범위)의 최상위로 끌어올려서 선언을 하는 방법이다.


```javascript
function sum (a, b) {
    var x = add(a,b);
    return x;
	function add (c, d) {
        var result = c+d;
        return result;
  }
}
```		
**인터프리터가 로드한 코드**
```javascript		
function sum (a, b) {
    var x ; // 선 선언
    function add (c, d) { // 선 선언(함수 선언 역시 끌어올려짐)
        var result = c+d;
        return result;
    }
	x = add(a,b); // 후 할당
    return x;
}
```

각종 버그를 초래할 문제점이 있는 기능이다. `var` 대신 `let, const`을 쓰면 많은 부분들이 해결된다.  
  
`let`과 `const`도 역시 호이스팅의 영향을 받는다.  
대신 TDZ(_Temporal Dead Zone_)에 의해 제약을 받게 된다. 변수 초기화 전에 접근시 `var`은 `undefined`를 반환하는 반면 `const, let`은 `ReferenceError`가 발생(_TDZ의 제약_)된다.  

이 차이는 변수가 어휘적 바인딩(_일반적으로 정의_)에 의해 초기화 되기 전과 후의 `접근 가능 유무`를 만들게 된다.  
let x; 도 아무 값을 넣지 않아도 어휘적 바인딩 후에는 undefined 반환된다. (_undefined로 초기화 된것_)

***참고글***  
[1](https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365)
[2](https://namu.wiki/w/%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85)

### 배열과 오브젝트의 차이점 ###

- 배열은 값을 가지며 각 값에는 숫자형 인덱스가 있다(_매핑할때 키로 쓸 수 있다_)  
- 오브젝트는 프로퍼티를 가지며 각 프로퍼티에는 문자열이나 심볼 인덱스가 있다  
- 배열에는 순서가 있다   
- 오브젝트에는 순서가 없다  

### 객체 지향과 프로토타입 ###

- 자바와의 가장 큰 차이점
- 자바스크립트의 class는 일반적인 class가 아니다.
- 표기 : `클래스이름.prototype.메소드이름` or `클래스이름#매소드이름` (_최근에 더 자주 쓰인다_)
- 모든 함수에는 `prototype`이라는 특별한 프로퍼티가 존재한다.
- 클래스로 동작하는 함수에서 중요, new 키워드로 새 인스턴트 만들면 해당 객체는 `prototype` 프로퍼티 에 접근가능, `prototype` 프로퍼티를  `__proto__`프로퍼티(_앞뒤에 __가 붙은 프로퍼티는 자바스크립트 내부 동작에 영향을 줄수 있으므로 주의_)에 저장 
- `동적디스패치`라는 개념이 중요하다.(_디스패치는 메서드 호출과 같은 의미_)  
 객체의 프로퍼티나 메서드 접근시 해당 사항 없으면 `prototype`에서 찾음, 클래스의 인스턴스가 모두 같은 `prototype`을 공유하기 때문에 해당 사항 있다면 모두 접근가능  
  

**Car클래스에 shift 라는 메서드가 선언시 가정** (_자동으로 `__proto__`프로퍼티에 저장 _)

```javascript
    // 경우1     
	car1 = new Car();
    car1.shift(); // Car에 있는 프로토타입 메소드 호출
        
    // 경우2  
	car1 = new Car();
	car1.shift = () => () ; // car1에 shift 선언
	car1.shift()  // Car에 있는 프로토타입 메소드 호출 X
	Car.prototype.shift() // Car에 있는 프로토타입 메소드 호출 O
```

### 비동기 처리, callback, promise, async/await ###

- **비동기 처리** : 특정 연산이 끝날때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성이다. 사용자 입력외에 Ajax호출을 통한 네트워크요청, 파일 읽고쓰는 작업, 의도적 시간 지연작업(알림 등) 등에 비동기적 테크닉이 이용된다. 

- **Callback** : Callback은 나중에 호출할 함수를 의미한다. setTimeout, setInterval, clearInterval 이용

	**Callback지옥** : 비동기 처리 로직을 이용시에 콜백 함수를 연속으로 사용할때 일단 코드가독성도 떨어지고 안전장치도 없기때문에 정확하게 호출을 확신할수가 없게 되어 버그관리에 취약하게 된다.
- **Promise** : Promise에서도 콜백이 사용되긴 하지만 예측가능한 패턴에서만 이용한다. 기본개념은 Promise 기반 비동기적 함수를 호출하면 그함수는 Promise 인스턴스를 반환하게되고 성공 or 실패 두가지만 확인한다.
	
	3가지 state 존재 (`pending(대기)`, `fulfilled(이행)`, `Rejected(실패)`)
	 
	비동기 처리를 다른곳에서 하고싶으면 Promise 객체를 넘기기만 하면된다.(마치 호출기를 다른사람에게 주듯)
```javascript
	// 콜백만 적용
	
	function getData(callbackFunc) {
  $.get('url 주소/products/1', function (response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}
	getData(function (tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
	
	// 프로미스 적용
	
	function getData(callback) {
  // new Promise() 추가
  return new Promise(function (resolve, reject) { // 성공 아니면 실패
    $.get('url 주소/products/1', function (response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}
	// getData()의 실행이 끝나면 호출되는 then()
getData().then(function (tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});
```	
`resolve()` 실행시 프로미스의 state가 fullfilled가 되고 `then()`을 통해 처리 결과 값을 받을 수 있다.
`reject()` 실행시 프로미스의 state가 rejected가 되고 `catch()`를 통해 에러 값을 받을수 있다
	
fetch 실행시 성공 실패여부에 따라 위 둘 함수 실행하고 그에따라 then 이나 catch로 실행되는 듯하다
	

**참고글**  
[1](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)

	
- **async/await**: 동기코드와 유사한 스타일의 코딩스타일을 가능하게 하는게 장점이다. 최상위의 promise에 대해서 사용 하게된다. await로 선언시킨 함수 완료 후에 연결된 다른 함수가 실행 될 수 있게 해준다. 
	


### Ajax(Asynchronous JavaScript and XML) ###

예전에는 새로운 데이터를 웹페이지에 넣기위해서는 페이지 전달을 전달해 주었다.
매번 새로운 레이아웃의 페이지를 처음부터 다시 렌더링 해야 했으므로 서버나 클라이언트나 모두 부담이 되었다.

그 대안으로 나온 `Ajax`는 웹페이지의 디자인 요소와 정보요소를 분리, 웹페이지의 골격구조가끝나면 javascript를 통해 서버에서 데이터만을 별도로 요청해서 json 데이터를 받아서 웹페이지에끼워 넣어준다.

양방향 기술은 아니라서 요청-응답 사이클에서만 이용된다.
### 호출스택(콜스택) ###

프로그램이 함수를 호출하고 그 함수는 또 다른 함수를 호출하고 반복 될때 자바스크립트가 인터프리터는 모두 추적가능 해야한다. 완료되지 않은 함수들을 쌓아 놓는곳이 `호출스택` 이다

에러가 발생시 연쇄적으로 연결되어있는 함수들이 죄다 에러가나고 캐치가 될때까지 호출 스택을따라서 올라간다. 에러는 `호출스택` 어디에서나 캐치가 가능하지만 캐치를 못할 시 프로그램을 단순히 중단하게 된다.

>`호출스택`이 단일 스레드 기반이기 때문에 앞선 작업이 완료되지 않은 경우 후속작업들 처리가 되지 않는다.  
**해결방법** : web api에 있는 **비동기 콜백**이용 
Web API의 비동기 콜백을 이용하면 이벤트루프에서 호출될 함수를 task queue 에 넣어놓고 자바스크립트 엔진의 호출스택으로 비동기적으로 push할 수 있다.

**참고글**  
[1](https://new93helloworld.tistory.com/358)
[2](https://new93helloworld.tistory.com/361)


### 단일스레드, 동시성, 이벤트 루프 ###

동시성에 대한 처리는 누가 하는 걸까? 바로 이 자바스크립트 엔진을 구동하는 환경, 즉 브라우저나Node.js가 담당한다. 먼저 브라우저 환경을 간단하게 그림으로 표현하면 다음과 같다.

![sample](./img/sample.png)
			

자바스크립트가 '단일 스레드' 기반의 언어라는 말은 '자바스크립트 엔진이 단일 호출 스택을사용한다'는 관점에서만 사실이다. 실제 자바스크립트가 구동되는 환경(_브라우저, Node.js등에서는 주로 여러 개의 스레드가 사용되며, 이러한 구동 환경이 단일 호출 스택을 사용하는 자바스크립트 엔진과 상호 연동하기 위해 사용하는 장치가 바로 `이벤트 루프`인 것이다._)

`이벤트루프`를 벗어난 비동기 호출에 의해 이용되는 setTimeout, try catch 등의 함수들은WebAPI에 정의되어 있다. 모든 비동기 API들은 작업이 완료되면 콜백 함수를 태스크 큐에 추가한다.  
 이벤트 루프는 '현재 실행중인 태스크가 없을 때'(주로 호출 스택이 비워졌을 때) 태스크 큐의 첫번째 태스크를 꺼내와 실행한다.


**참고글**
[1](https://meetup.toast.com/posts/89)



### 실행컨텍스트 ###
  실행 컨텍스트(Execution Context)는 scope, hoisting, this, function, closure 등의 동작원리를 담고 있는자바스크립트의 핵심원리이다. 실행가능한 코드가 실행되기 위해 필요한 환경, 코드를 실행하면 실행 컨텍스트 스택이 함수마다 생성되고 소멸한다. 전역코드인지 Eval코드인지 함수코드인지 따라서 스택에 push되는 순서가 달라진다( 가장안쪽에 있는 함수가 나중에 push되고 가장 먼저 pop된다)  

  
  	
  스택에 쌓이는 실행 컨텍스트는 물리적으로 3가지 프로퍼티(변수객체, 스코프체인, thisValue)를 소유한다.

- 변수객체 : 전역 변수, 파라미터(매개변수)와 인수정보, 함수선언(람다식은 제외)
- 스코프체인 : 전역 객체와 중첩된 함수들의 스코프의 레퍼런스에서 변수를 검색하는 메커니즘, 프로토타입 체인과다르게 프로퍼티가 아닌 식별자(변수)를 검색한다
- thisValue: this값이 할당된다
	
**참고글**  
[1](https://poiemaweb.com/js-execution-context)


### DOM (Document Object Model) ###

- html문서에 접근하는 API를 뜻하는 용어이다.
- 브라우저가 HTML문서를 조작하는 핵심, 트리구조로 표현되고 노드로 구성이 되어있다.
- DOM트리의 모든 노드들은 Node클래스의 인스턴스로 되어있다.
```
document -- <html> ---<head> -- <title > …
			            |                       
			              -- <body> …
```
이런식으로 html문서가 트리형태로 저장 되어있다
document.getElementById(''); 와 같은 함수들 이용해서 트리의 노드값 찾아낼 수 있다
	
### 이벤트 ###
DOM API에는 200개 가까운 이벤트가 정의 되어있다.  
기본 핸들러가 지정된 이벤트들도 많은데 막으려면 preventDefault()를 호출해야한다(Input시 거의필수)  
         
- **이벤트 캡처링과 버블링**: 이벤트는 꼭 한 곳에서 처리(핸들링)하는 것은 아니고 부모에서 처리해도 되고 조부모가 처리해도 된다.  그렇기 때문에 이벤트에서 응답할 기회 어떤 순서로 정하는 방법이 필요하다.  
	1. 캡처링 : 가장 먼 조상부터 시작하는 방법
	2. 버블링 : 이벤트가 일어난 요소에서 시작해서 거슬러 올라가는방법  

html5는 둘 모두를 지원위해 먼저 조상에서 시작해서 요소까지 온 다음 다시 요소부터 조상까지 거슬러 가는 방법을 채택했다

         
- **이벤트 드리븐 프로그래밍**: 이벤트 루프의 형태로 작동하면서 시스템이 이벤트가 언제 어디서 어떤 이벤트가발생했는지 데이터를 수집하여 이벤트 핸들러로 디스패치한다. 이벤트 핸들러는 프로금 내부에서 입력을 받아 처리하는콜백 서브루틴이며 자바스크립트에서는 이벤트 리스너로 불린다. 
	

**참고글**  
[1](https://ko.wikipedia.org/wiki/%EC%9D%B4%EB%B2%A4%ED%8A%B8_(%EC%BB%B4%ED%93%A8%ED%8C%85))

