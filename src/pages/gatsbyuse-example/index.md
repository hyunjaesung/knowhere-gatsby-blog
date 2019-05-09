---
title: 'Gatsbyjs Markup 작성'
date: '2019-05-09'
spoiler: 'Gatsbyjs Markup'
tags: ['web', 'gatsbyjs']
--- 

### 헤더정보

```
---
path: "/hello-world/"
category: "Sample"
tags: ["tag", "should", "be", "array"]
title: "Hello, World!"
date: "2018-08-15T00:00:00.000Z"
summary: "You can create your own blog with Gatsby!"
---
```

### 링크만들기

```
[React Hooks](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)
```
해당 글의 헤더로도 보낼수있음
```
[look at the principles that really _are_ useful](#writing-resilient-components).**
```

### 기울이기

```
_providing_ guidance and _learning_
```

### 점찍기

-

### 강조하기

```
**Not drinking more than two cups of coffee.**
```

### 헤더글작성

늘어날수록 h번호 늘어난다(적은 우선순위)

### 코드작성


`이용해서 작성, 여러개 쓰면 더 큰 컨테이너도 만들어진다

````
```jsx{3,6}
class Button extends React.Component {
state = {
color: this.props.color
};
render() {
const { color } = this.state; // 🔴 `color` is stale!
return (
<button className={'Button-' + color}>
{this.props.children}
</button>
);
}
}
```
````


### 강조표시

```
`initialColor` or `defaultColor`

```

### 이미지넣기

```
![blahblah](./useeffect.gif)

```
