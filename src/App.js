/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
<<<<<<< HEAD
  let posts = "강남 고기 맛집";
  let style = { color: "pink", fontSize: "30px" };

  return (
    <div className="App">
      <div className="black-nav">
        <div style={style}>개발 blog</div>
      </div>
      <h4>{posts}</h4>
      <img src={logo} alt="logo"></img>
=======
  //ES6 destructuring 문법
  let [title, titleChange] = useState([
    "남자 추천 성수동 맛집",
    "남자 추천 강남 맛집",
    "남자 추천 상왕십리 맛집",
  ]);

  function titleChangeGender() {

    // state는 복사본을 만들어서 수정하세요
    // 그런데 state는 deep copy를 합시다
    // const newArray = title; 이건 값 공유, reference data type 특징
    // title[0] = 21321; 이렇게 하면 안된다.
    // 이렇게 사용하면 복사해서 독자적으로 사용하는 것이 아니라 값공유임!

    // deep copy
    // 리액트의 대원칙: immutable data
    const newArray = [...title];
    // 1. 0번째 title값 변경
    // newArray[0] = '여자 추천 성수동 맛집'
    // 2. 응용 문제 정렬하기 성공!
    newArray.sort();

    titleChange(newArray)
  }



  let [likeCount, likeCountChange] = useState(0);
  // likeCountChange(100); likeCountChange는 함수

  let posts = "강남 고기 맛집";
  // let style = { color: "pink", fontSize: "30px" };

  return (
    <div className="App">
      <div className="black-nav">Blog</div>
      <button
        type="button"
        onClick={titleChangeGender}
      >
        성별 필터 버튼
      </button>
      <div className="list">
        <h3>
          {title[0]}
          <button
            type="button"
            onClick={() => { likeCountChange(likeCount + 1) }}
          >
            ❤️
          </button>
          {likeCount}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
>>>>>>> e2ea98b7cd363715ac5202cfcf5bb0292c7ded3b
    </div>
  );
}

export default App;

<<<<<<< HEAD
// react 가장 큰 장점
// 데이터 바인딩이 쉽다
// 데이터 바인딩이란?
// api로 넘어오는 데이터를 변수로 넣는다.
// 변수 이미지 함수 스타일 등등 .... 쉽게 넣을 수 있다

// style은 중괄호 object 형식으로
=======
/*
// 220124 //
react 가장 큰 장점
데이터 바인딩이 쉽다
데이터 바인딩이란?
api로 넘어오는 데이터를 변수로 넣는다.
변수 이미지 함수 스타일 등등 .... 쉽게 넣을 수 있다
style은 중괄호 object 형식으로
*/

/*
// 220125 //
데이터는
1. 변수에 넣거나
2. state에 넣거나

state는 
1. 변수대신 사용하는 데이터 저장공간
2. useState()를 이용해 만들어야함
  2-1. [데이터, 데이터 변경]

state의 장점
웹이 App처럼 동작하게 만들고 싶어서
state는 변경되면 HTML이 자동으로 재렌더링 됩니다
그냥 변수로 데이토 만들고 사용하면 새로고침을 해야함
!!새로고침없이 스무스하게 만들고싶다!!! useState
자주 바뀌는, 중요한 데이터는 변수 말고 state로 저장해서 사용
*/
>>>>>>> e2ea98b7cd363715ac5202cfcf5bb0292c7ded3b
