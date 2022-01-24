import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = "강남 고기 맛집";
  let style = { color: "pink", fontSize: "30px" };

  return (
    <div className="App">
      <div className="black-nav">
        <div style={style}>개발 blog</div>
      </div>
      <h4>{posts}</h4>
      <img src={logo} alt="logo"></img>
    </div>
  );
}

export default App;

// react 가장 큰 장점
// 데이터 바인딩이 쉽다
// 데이터 바인딩이란?
// api로 넘어오는 데이터를 변수로 넣는다.
// 변수 이미지 함수 스타일 등등 .... 쉽게 넣을 수 있다

// style은 중괄호 object 형식으로
