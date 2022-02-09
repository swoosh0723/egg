/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {


  return (
    <div className="App">
      블로글 발행 복습

    </div>
  );
}
export default App;

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


/*
// 220127 //
아래처럼은 사용 못한다.
return (
  <div>
  </div>
  <div>
  </div>
)

HTML 한단어로 줄여서 쓸 수 있는 방법: 리액트의 component 문법
*Component 유의사항*
1. 이름은 대괄호
2. return() 안에 있는건 태그하나로 묶어야함
  2-1. 아니면 의미없는 div를 쓰기 싫으시면 <> </> 이걸로 묶음

어떤것을 Component로 만드는게 좋을까
- 반복출현하는 UI
- 자주 변경되는 HTML UIemf
  - 성능적으로 이점이 있다

Compoent 많이 만들면 단점
- state 사용시 복잡해짐

필요한것을 적절히 Component 시켜야한다
*/



/*
  예전의 react 문법
  알아두는 이유
  예전 react 수정할때가 있다.
  
  1. state저장할 땐 constructor() 안에 this.state 라는 변수에 전부 보관하셔야합니다.
  2. 그리고 꺼내쓸 때는 this.state.state명 이렇게 쓰시면 됩니다.
*/

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'kim', age: 30 }
  }

  changeName = () => {
    this.setState({ name: 'park' })
  }

  render() {
    return (
      <div>
        <h3>프로필</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button
          onClick={this.changeName}
        >
          프로필 변경
        </button>
      </div>
    )
  }
}

