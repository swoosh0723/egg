/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {


  return (
    <div className="App">
      <div className="black-nav">학습내용 복습</div>
      <div className="list">
        <ListItem></ListItem>
      </div>
    </div>
  );

}

// components명은 반드시 대문자
function ListItem() {
  return (
    <>
      <div className="listItem">
        <h3>글제목</h3>
        <p>날짜: 2월 1일</p>
      </div>
    </>
  )
}

export default App;