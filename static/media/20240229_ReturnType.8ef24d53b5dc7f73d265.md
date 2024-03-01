---
title: '유틸리티 타입 ReturnType'
date: '2024-02-26'
slug: '유틸리티-타입-ReturnType'
tags: 'Typescript'
description: '함수의 리턴값 타입과 파라미터 타입을 추론해보자.'
---

### 이러한 예제가 있다.

```ts

import {Equal,Expect} from ~~

const myFunc = () => {
  return "hello";
};

```

함수의 리턴값을 type으로 설정해야하는 상황이 있다.  
위에 예제에서 단순하게
눈으로 보고 `type  MyFuncReturn = string; ` 으로 할수 있겠지만, 만약 저 함수가 다른 타입도 반환한다면 곧장 에러가 뜰것이다.

이때 사용하는 함수가 바로

### ReturnType

사용법은 간단하다.

`type MyFuncReturn = ReturnType<typeof myFunc>` 를 사용하면 된다.

결과

```ts
type tests = [Expect<Equal<MyFuncReturn, string>>]; // string
```

### 파라미터 타입 추론도 할 수있다. Parameters

예제 /

```ts
function func(
  foo: string,
  obj: {
    bar: number;
    bas: boolean;
  }
): void {}

// 위에 func 를 추론 하려면

type FuncParameters = Parameters<typeof func>;

type tests = [
  Expect<
    Equal<
      Parameters, //tuple type
      [
        string,
        {
          bar: number;
          bas: boolean;
        }
      ]
    >
  >
];
```

예시 와 같이 함수의 파라미터 값을 유추하려면 Parameter 유틸리티 타입을 사용하면 된다.

### 튜플(tuple)과 배열([])의 차이

`type StringArray = string[]` 이런식으로 사용할 수 있지만, 배열의 길이가 몇일지 알 수 없지만
`type STringTuple = [string, ]` 와 같이 Tuple 타입은 배열의 길이까지 지정하여 사용할 수 있다. 명시적으로 type을 지정 할 수 있다 ``type STringTuple = [string,string ] 이런식`

### 프로미스를 반환하는 Awaited<>

함수의 프로미스 반환타입을 가져오는 타입 유틸리티가 있다.

```js
const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  });
};

//일때
type ReturnPromise = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string, name: string, email: string }>>
];
```

`type ReturnPromise = Awaited<ReturnType<typeof getUser>>;` 이런식으로 Awaited 가 Promise를 벗겨서 값을 알려준다.
