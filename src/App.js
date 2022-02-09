/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [title, titleChange] = useState([
    '성수동 맛집',
    '강남 맛집',
    '제주도 맛집'
  ]);

  let [likeCount, likeCountChange] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">학습내용 복습</div>
      <div className="list">
        <ListItem
          title={title}
          likeCount={likeCount}
          likeCountChange={likeCountChange}
        ></ListItem>
      </div>
    </div>


  );

}

// 1. components 생성
// components명은 반드시 대문자
// pros를 받을때는 사용한 곳에 바인딩 되어야함
// useState 변경할때는 Setter를 변경해주어야함
// let [현재상태, setter] = useState(0);
function ListItem(props) {
  return (
    <>
      <div className="listItem">
        <h3>{props.title[0]}</h3>
        <button
          type="button"
          onClick={() => { props.likeCountChange(props.likeCount + 1) }}
        >
          좋아요
        </button>
        <span>
          {props.likeCount}
        </span>
        <p>날짜: 2월 1일</p>
      </div>
    </>
  )
}

export default App;