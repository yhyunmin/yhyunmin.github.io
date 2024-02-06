# 개발 기술 블로그

> 이현민 블로그
> https://yhyunmin.github.io

## 사용한 기술 스택

### FRONTEND

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

Lang : **Javascript,Markdown**  
Lib & Framework : **React, Styled-Components, Zustand**  
Deploy : **Github pages**

## 프로젝트 개요

지킬테마,개츠비를 따로 사용하지 않고,  
리액트 환경에서 .md파일 작성만으로 포스팅이 가능한 개인 블로그를 구현하였습니다.

## 주요 기능 및 화면 구성

### 메인 페이지

포스트, 태그 필터 , 다크모드 , 최근 본 포스트

// 이미지  
md파일들의 메타데이터를 파싱하여,

- 포스트들을 즉시 반영하도록 구현.

- 포스트 카테고리 별 필터를 구현.

// 이미지

Styled-Components를 이용하여 스타일을 동적으로 다뤄 다크모드 구현

// 이미지

local Storage를 이용하여 최근 본 포스트를 구현. 이때, 가장 최근 본 포스트글은  
최상단에 위치합니다.

### 포스트 페이지

링크 목차 (TOC), 마크다운

// 이미지

마크다운의 레이아웃과 스타일을 Styled-Components 을 통해 구현

// 이미지

마크다운 본문을 파싱 후, 제목 태그만 따로 가져와  
링크형식의 목차를 구현. 링크 클릭시 해당 인덱스로 smooth scrolling 됨.

## 개선 목표

- 디자인 패턴에 맞춘 코드 스플리팅 (진행중)
- Intersection Observer API 사용하여 TOC 텍스트 볼드 처리
- 이미지,폰트 최적화,
- 폴더 구조 최적화
- CRA 사용대신 vite

## 폴더 구조

```
yhyunmin.github.io
├─ .eslintrc.json
├─ .nojekyll
├─ 404.html
├─ craco.config.js
├─ googleb63dbf212e6b4efa.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ .nojekyll
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  ├─ robots.txt
│  └─ sitemap.xml
├─ README.md
└─ src
   ├─ App.css
   ├─ App.jsx
   ├─ assets
   │  ├─ font
   │  │  ├─ D2Coding.woff2
   │  │  ├─ Hans.ttf
   │  │  ├─ Pretendard-Bold.woff2
   │  │  ├─ Pretendard-ExtraLight.woff2
   │  │  ├─ Pretendard-Regular.woff2
   │  │  └─ Pretendard-SemiBold.woff2
   │  └─ img
   │     ├─ mdi_arrow_left.svg
   │     ├─ mdi_arrow_right.svg
   │     ├─ mdi_github.svg
   │     ├─ mdi_mail.svg
   │     ├─ mdi_moon.svg
   │     ├─ mdi_resume.svg
   │     └─ profile.png
   ├─ components
   │  ├─ Atoms
   │  │  ├─ Article
   │  │  │  ├─ Article.jsx
   │  │  │  └─ index.jsx
   │  │  ├─ BackBtn
   │  │  │  └─ index.jsx
   │  │  ├─ ColorGuide
   │  │  │  └─ index.jsx
   │  │  ├─ ContactIcon
   │  │  │  └─ ContactIcon.jsx
   │  │  ├─ DarkTheme
   │  │  │  ├─ DarkTheme.jsx
   │  │  │  └─ SunIcon.jsx
   │  │  ├─ Logo
   │  │  │  └─ Logo.jsx
   │  │  ├─ RecentPost
   │  │  │  └─ RecentPost.jsx
   │  │  └─ Tag
   │  │     └─ Tag.jsx
   │  ├─ Loading
   │  │  └─ Loading.jsx
   │  ├─ Molecules
   │  │  ├─ ArticleList
   │  │  │  └─ ArticleList.jsx
   │  │  ├─ ContactList
   │  │  │  └─ ContactList.jsx
   │  │  ├─ Nav
   │  │  │  └─ Nav.jsx
   │  │  ├─ Profile
   │  │  │  └─ index.jsx
   │  │  ├─ RecentPostList
   │  │  │  └─ index.jsx
   │  │  └─ TagList
   │  │     └─ TagList.jsx
   │  ├─ Organisms
   │  │  ├─ About
   │  │  │  └─ About.jsx
   │  │  ├─ ArticleSection
   │  │  │  └─ ArticleSection.jsx
   │  │  └─ Header
   │  │     └─ Header.jsx
   │  └─ Templates
   │     ├─ Error
   │     │  └─ index.jsx
   │     ├─ Main
   │     │  └─ index.jsx
   │     └─ Post
   │        └─ index.jsx
   ├─ Constants
   │  └─ Contacts.js
   ├─ contents
   │  ├─ 20240111_test1.md
   │  ├─ 20240111_test2.md
   │  ├─ 20240111_test3.md
   │  ├─ 20240111_test4.md
   │  ├─ 20240111_test5.md
   │  ├─ 20240111_test6.md
   │  ├─ 20240111_test7.md
   │  └─ 20240114_test0.md
   ├─ hooks
   │  └─ useLocalstorage.jsx
   ├─ index.css
   ├─ index.js
   ├─ libs
   │  ├─ convertDate.js
   │  ├─ sitemap-generator.js
   │  └─ sitemapRoutes.jsx
   ├─ Pages
   │  ├─ Error
   │  │  └─ index.jsx
   │  ├─ Main
   │  │  └─ index.jsx
   │  └─ Post
   │     └─ index.jsx
   ├─ router
   │  └─ routes.jsx
   ├─ store
   │  ├─ ArticleStore.js
   │  ├─ LocalStorageStore.js
   │  ├─ PostStore.js
   │  └─ ThemeStore.js
   ├─ styles
   │  ├─ fonts.js
   │  ├─ GlobalStyle.js
   │  └─ theme.js
   └─ util
      ├─ contextLoader.js
      ├─ fetchMdData.js
      └─ generateSlug.js

```
