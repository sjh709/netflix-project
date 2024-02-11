# 🎬 영화 정보 검색 사이트 (netflix-project)

<img width="1532" alt="project2" src="https://github.com/sjh709/netflix-project/assets/42454759/4a20ad73-07c1-4879-bc96-cd03e34e0204">

- 배포 URL : https://jh-netflix-project.netlify.app/

<br>

## 1. 프로젝트 소개

- 인기 있는 영화, 평점 높은 영화, 개봉 예정 영화들을 확인 할 수 있습니다.
- 검색을 통해 찾고싶은 영화의 정보를 볼 수 있습니다.
- 영화의 줄거리, 예고편, 리뷰 등 상세 정보를 확인할 수 있습니다.

<br>

## 2. 개발 환경

- Front-end : HTML, React, Redux
- Back-end : TMDB api 활용
- 버전 관리 : Github
- 서비스 배포 환경 : Netlify

<br>

## 3. 프로젝트 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📜Banner.jsx
 ┃ ┣ 📜MovieCard.jsx
 ┃ ┣ 📜MovieCardDetail.jsx
 ┃ ┣ 📜MovieDetailInfo.jsx
 ┃ ┣ 📜MovieSlide.jsx
 ┃ ┣ 📜Navigation.jsx
 ┃ ┣ 📜RecommendInfo.jsx
 ┃ ┣ 📜ReviewContent.jsx
 ┃ ┣ 📜ReviewInfo.jsx
 ┃ ┗ 📜SortSection.jsx
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜MovieDetail.jsx
 ┃ ┗ 📜Movies.jsx
 ┣ 📂redux
 ┃ ┣ 📂action
 ┃ ┃ ┗ 📜movieAction.js
 ┃ ┣ 📂reducer
 ┃ ┃ ┗ 📜movieReducer.js
 ┃ ┗ 📜store.js
 ┣ 📂utils
 ┃ ┗ 📜api.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

<br>

## 3. 페이지별 기능

### [초기화면]

- 서비스 초기 화면

| 초기화면                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------- |
| <img width="500" alt="home" src="https://github.com/sjh709/netflix-project/assets/42454759/4a20ad73-07c1-4879-bc96-cd03e34e0204"> |
