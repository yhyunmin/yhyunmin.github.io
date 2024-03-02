---
title: 'Extract,Exclude'
date: '2024-03-03'
slug: 'Extract-Exclude'
tags: 'Typescript'
description: 'Union 타입에서 뽑아내는 Extract,Exclude'
---

### Extract

Union 타입에서 특정 요소들을 뽑아서 새로운 Union 타입을 생성할 수 있다.

예제 1)

```ts
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; x: number }
  | { kind: 'triangle'; x: number; y: number };

type T2 = Extract<Shape, { kind: 'circle' } | { kind: 'square' }>;
// type T2 = { kind: "circle"; radius: number; } | {kind: "square"; x: number}
```

Shape 이라는 Discriminated Union에서 circle, square 의 구분자를 갖고 있는 요소들을 뽑아서 새롭게 T2 라는 타입을 생성한다.

예제 2)

```ts
type Routes = '/users' | '/users/:id' | '/products' | '/products/:id';
type DynamicRoutes = Extract<Routes, `${string}:${string}`>;
// "/users/:id" | "/products/:id"
```

두번째 타입인자에 Template literal type 를 넘겨서 새로운 Union 타입을 생성할 수 있다.
Exclude
Extract와 반대로 Union타입에서 제외시킬 특정 요소를 넘기게 되면 일부 요소들로 새로운 타입이 생성된다.

type T0 = Exclude<"a" | "b" | "c", "a">;
// "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// "c"

type Shape =

| { kind: "circle"; radius: number }

| { kind: "square"; x: number }

| { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "circle" }>
// { kind: "square"; x: number }
// | { kind: "triangle"; x: number; y: number };
