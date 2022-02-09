/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, titleChange] = useState([
    '남자 성수동 맛집',
    '남자 강남 맛집',
    '남자 제주도 맛집'
  ]);

  const [likeCount, likeCountChange] = useState(0)

  const [modal, modalChange] = useState(false);

  function genderChange() {
    // 반복문으로 새로운 배열 생성
    // 아래 titleChange로 변경한다
    const womon = title.map((item) => {
      return item.replace('남자', '여자')
    });

    // 정렬
    womon.sort();

    titleChange(womon);
  }

  function modalToggle() {
    { modalChange(!modal) }
  }

  return (
    <div className="App">
      <div className="black-nav">학습내용 복습</div>

      <button
        type="button"
        onClick={genderChange}
      >
        성별 버튼
      </button>
      <div className="list">
        {
          title.map((titleText, i) => {
            return (
              <ListItem
                key={i}
                title={titleText}
                likeCount={likeCount}
                likeCountChange={likeCountChange}
              >
              </ListItem>
            )
          })
        }
      </div>

      <button
        type="button"
        onClick={modalToggle}
      >
        모달 버튼
      </button>

      {/* 
        조건문 !! 
        1 < 3 ? true : false
      */}

      {
        modal === true
          ? <Modal></Modal>
          : null
      }
    </div>
  );

}

// 1. components 생성
// components명은 반드시 대문자
// pros를 받을때는 사용한 곳에 바인딩 되어야함
// useState 변경할때는 Setter를 변경해주어야함
// const [현재상태, setter] = useState(0);
function ListItem(props) {
  return (
    <>
      <div className="listItem">
        <h3>{props.title}</h3>
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

function Modal() {
  return (
    <>
      <div className="modal">
        <h3>모달창입니다람쥐</h3>
      </div>
    </>
  )
}

export default App;