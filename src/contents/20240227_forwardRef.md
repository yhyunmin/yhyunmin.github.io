---
title: 'React의 FowardRef란 '
date: '2024-02-26'
slug: '20240226-야그니'
tags: 'React'
description: '엘리먼트에 접근하는 ref는 알지만...forwardRef?'
---

### forwardRef란 ?

부모 컴포넌트에서 자식 컴포넌트로 ref를 **전달**할 때 사용하는 **기법**  
부모 컴포넌트가 자식컴포넌트의 dom 요소를 접근해야할 때 사용된다.

*예제*

```js

function App() {
  return (
    <div>
      <input />
      <button>input에게 focus 하는 버튼</button>
    </div>
  );
}
// 버튼이 클릭될때 input 에게 포커스를 주고싶다면...?
```

```js
// 기존 ref 활용 방식
function App() {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
    <input ref={inputRef}/>
      <button onClick={focus}>input에게 focus 하는 버튼</button>
    </div>
  )
}
```



> 참고자료 https://www.youtube.com/watch?v=LtYzjv2yXHE
