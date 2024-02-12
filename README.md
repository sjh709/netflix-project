# 🎬 영화 정보 검색 사이트 (netflix-project)

<img width="1532" alt="project2" src="https://github.com/sjh709/netflix-project/assets/42454759/4a20ad73-07c1-4879-bc96-cd03e34e0204">

- 배포 URL : https://jh-netflix-project.netlify.app/

<br>

## 1. 프로젝트 소개

- 인기 있는 영화, 평점 높은 영화, 개봉 예정 영화들을 확인할 수 있습니다.
- 검색을 통해 찾고 싶은 영화의 정보를 볼 수 있습니다.
- 영화의 줄거리, 예고편, 리뷰 등 상세 정보를 확인할 수 있습니다.

<br>

## 2. 개발 환경

- Front-end : HTML, CSS, JavaScript, React, React Router, React Bootstrap, Axios, Redux, Redux-thunk
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

## 4. 페이지별 기능

### [초기화면]

- 서비스 초기 화면
- 내비게이션 바를 통해 홈, 영화 페이지로 이동할 수 있습니다.
- 영화를 검색할 수 있습니다.
- 제일 인기 있는 영화의 제목, 설명, 이미지가 배너로 띄워집니다.
- 인기 있는 영화, 평점 높은 영화, 개봉 예정 영화를 슬라이더로 확인할 수 있습니다.
- 각 영화에 마우스를 올리면 영화의 간단한 정보를 확인할 수 있습니다.
- 각 영화를 클릭하면 영화 상세 페이지로 이동합니다.

| 초기화면 - PC                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| <img height="300" alt="홈페이지" src="https://github.com/sjh709/netflix-project/assets/42454759/4a20ad73-07c1-4879-bc96-cd03e34e0204"> |

| 초기화면 - 모바일                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| <img height="300" alt="홈페이지(모바일)" src="https://github.com/sjh709/netflix-project/assets/42454759/605c6e86-2681-4b0f-88ef-8dcf9933c020"> |

<br>

### [영화 페이지]

- 내비게이션 바를 통해 영화 페이지로 이동할 수 있습니다.
- 검색을 통해 영화 페이지로 이동할 수 있습니다.
- 영화를 클릭하여 상세 페이지로 이동할 수 있습니다.
- 영화를 인기순, 날짜순, 평점순으로 정렬할 수 있습니다.
- 영화를 연도별, 장르별로 필터링할 수 있습니다.

| 영화 페이지 - PC                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img height="300" alt="영화페이지" src="https://github.com/sjh709/netflix-project/assets/42454759/abb612d2-5270-4eea-8059-3e91b4ee6d17">            |
| <img height="300" alt="영화페이지(정렬,필터)" src="https://github.com/sjh709/netflix-project/assets/42454759/5cba1836-b2df-47cd-893a-bcd69d920f46"> |

| 영화 페이지 - 모바일                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img height="300" alt="영화페이지(정렬,필터)" src="https://github.com/sjh709/netflix-project/assets/42454759/0f596804-9bf4-4fdc-864c-0b68ab7333f0"> |

<br>

### [영화 상세 페이지]

- 영화의 상세 정보를 볼 수 있습니다. (제목, 줄거리, 개봉일 등)
- Watch Trailer를 클릭하면 예고편을 볼 수 있습니다.
- 영화의 리뷰 정보, 관련 영화들을 확인할 수 있습니다.

| 영화 상세 페이지 - PC                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img height="300" alt="영화상세페이지" src="https://github.com/sjh709/netflix-project/assets/42454759/17b7a79a-892a-4182-8ab0-fdd780dbb153">           |
| <img height="300" alt="영화상세페이지(예고편)" src="https://github.com/sjh709/netflix-project/assets/42454759/33778db4-d05c-4e5f-91a0-7c30b3003f81">   |
| <img height="300" alt="영화상세페이지(리뷰)" src="https://github.com/sjh709/netflix-project/assets/42454759/b360683c-a994-4526-84de-31f60abe9168">     |
| <img height="300" alt="영화상세페이지(관련영화)" src="https://github.com/sjh709/netflix-project/assets/42454759/cc4d0ce8-b6a2-42e9-9037-f105a800a480"> |

| 영화 상세 페이지 - 모바일                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img height="300" alt="영화상세페이지(모바일)" src="https://github.com/sjh709/netflix-project/assets/42454759/6de0b62a-fee5-47a8-a50c-f12b36523e6c"> |

<br>
