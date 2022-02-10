/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, titleChange] = useState([
    '남자 성수 맛집',
    '남자 제주도 맛집',
    '남자 이태원 맛집'
  ])

  const [likeCount, likeCountChange] = useState(0);

  const [modalOpen, modalOpenChange] = useState(false);

  const [contents, contentsChange] = useState();

  const [modalTitle, modalTitleChange] = useState('');

  function like() {
    likeCountChange(likeCount + 1);
  }

  function changeGender() {

    // map return 해줘야함
    const woman = title.map((item) => {
      // if (item.includes('남자')) {
      //   return item.replace('남자', '여자')
      // } else {
      //   return item.replace('여자', '남자')
      // }

      return item.includes('남자')
        ? item.replace('남자', '여자')
        : item.replace('여자', '남자')

    });

    woman.sort();

    titleChange(woman);
  }

  function modalToggle() {
    modalOpenChange(!modalOpen);
  }


  return (
    <div className="App">
      <div className="black-nav">학습내용 복습2</div>

      <button
        type="button"
        onClick={changeGender}
      >
        성별버튼 변경!
      </button>

      {
        title.map((item, i) => {
          return (
            <ListItem
              key={i}
              title={item}
              likeCount={likeCount}
              like={like}
              modalTitle={modalTitle}
              modalTitleChange={modalTitleChange}
              modalOpen={modalOpen}
              modalOpenChange={modalOpenChange}
            ></ListItem>
          )
        })
      }

      <button
        type="button"
        onClick={modalToggle}
      >
        열러라 모달
      </button><br />

      <input
        onChange={(e) => {
          contentsChange(e.target.value)
        }}
      />
      <button
        type="button"
        onClick={() => {
          const titleAdd = [...title];
          titleAdd.unshift(contents);
          titleChange(titleAdd);
        }}
      >
        블로그 글 발행하기
      </button>

      {
        modalOpen === true
          ? <Modal
            modalTitle={modalTitle}
          ></Modal>
          : null
      }

    </div>
  );
}
export default App;

// 함수도 props
function ListItem(props) {
  return (
    <>
      <div
        className="listItem"
        onClick={() => {
          console.log(props.title);
          props.modalTitleChange(props.title);
          props.modalOpenChange == false
            ? props.modalOpenChange(false)
            : props.modalOpenChange(true)
        }}
      >
        <h3>
          {props.title}

          <button
            type="button"
            onClick={props.like}
          >
            좋아요
          </button>
          <span>
            {props.likeCount}
          </span>
        </h3>
        <p>발행일: 2022.02.10</p>
      </div>
    </>
  )
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <div>
          {props.modalTitle}<br />모달창입니다
        </div>
      </div>
    </>
  )
}