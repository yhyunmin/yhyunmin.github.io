---
title: 'Object Indexing'
date: '2024-03-03'
slug: 'Object-Indexing'
tags: 'Typescript'
description: '오브젝트 벨류의 타입을 추출해보자'
---

### Object Indexing

빠르게 예제를 훑어보자

```ts
export const fakeDataDefaults = {
  foo: 'bar',
  bar: 123,
  baz: true,
};

export type FooType = unknown;
export type BarType = unknown;
export type BazType = unknown;

type tests = [
  Expect<Equal<FooType, string>>,
  Expect<Equal<BarType, number>>,
  Expect<Equal<BazType, boolean>>
];
```

FooBarBazType 을 그러니까 fakeDataDefaults 에서 필드 값의 타입을 가져오려면 typeof 를 이용하여 가져올 수있다.

```ts
export const fakeDataDefaults = {
  foo: 'bar',
  bar: 123,
  baz: true,
};

type fakeDataType = typeof fakeDataDefaults;
export type FooType = fakeDataType['foo'];
export type BarType = fakeDataType['bar'];
export type BazType = typeof fakeDataDefaults.baz;

type tests = [
  Expect<Equal<FooType, string>>,
  Expect<Equal<BarType, number>>,
  Expect<Equal<BazType, boolean>>
];
```
