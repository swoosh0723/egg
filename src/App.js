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

  return (
    <div className="App">
      <div className="black-nav">학습내용 복습</div>
      <div className="list">

        <ListItem
          title={title}
        ></ListItem>
      </div>
    </div>


  );

}

// components명은 반드시 대문자
// pros를 받을때는 사용한 곳에 바인딩 되어야함
function ListItem(props) {
  return (
    <>
      <div className="listItem">
        <h3>{props.title[0]}</h3>
        <p>날짜: 2월 1일</p>
      </div>
    </>
  )
}

export default App;