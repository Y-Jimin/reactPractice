//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Hello from './Hello';

function App() {

  let post = "강남 우동 맛집";
  let [글제목, changeName] = useState(['여자 코트 추천', '남자 코트 추천', '쇼핑몰 추천']);
  let [좋아요, plusNumber] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <h4>블로그임</h4>

        <h2>블로그</h2>
      </div>
      <h4 style={{background: "yellow", color: "red"}}>{post}</h4>

      

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '올해의 예상 트렌드';
        changeName(copy);
        }}>🔃</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        changeName(copy);
      }}>정렬</button>

      <div className='list'>
      <h4>{글제목[0]}   <span onClick={() => {plusNumber(좋아요 + 1)}}>👍</span>   {좋아요}   </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Hello></Hello>
      <Modal></Modal>

    </div>
  );
}

let Modal = () => {
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
