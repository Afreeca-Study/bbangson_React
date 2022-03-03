import React, {useState} from 'react';

import Image from "./components/Image";
import Introduce from "./components/Introduce";

import {nephew1,nephew2,nephew3,nephew4,nephew5,nephew6,nephew7,nephew8} from "./assets/index";
import './App.css';

export default function App() {

  const [index, setIndex] = useState(1);

  const title = "우리 요한이를 소개합니다."
  const imageList = [nephew1,nephew2,nephew3,nephew4,nephew5,nephew6,nephew7,nephew8];
  const introduceList = [
    `요한이는 뺑슨의 조카 입니다.\n 
  지난 1월에 돌이 지난 꼬맹이에요. \n 
  치명적인 매력을 가진 우리 요한이를 소개합니다~~~` , 
  `이 사진은 태어난지 6개월도 되지 않았을 때, 아기 수영장에서 찍은 사진이에요! \n
  목 튜브를 하는 모습이 너무 귀여워서 찍었답니다.`, 
`이 사진은 볼이 너무 빵빵한게 귀여워서 가져왔습니다. \n
아 참! 간단하게 요한이 소개좀 할게요~~ \n
이름 : 우요한\n
성별 : 남자\n
생년원일 : 2021.01.22`, 
`때로는 상남자!`, 
`가끔은 개구장이~`,
`그리고 이쁘기도하고`,
`스타벅스도 잘어울려요~~`,
`이제는 어엿하게 어린이집도 다니는 2살 우요한이었습니다~~`]

  const handleClick = () => {
    if(index === 8) {
      setIndex(prev => prev % 7);
    }
    else {
      setIndex(prev => prev + 1);
    }
  }

  return (
    <div className='App'>
      <div className='Title'> {title}</div>
      <div className='Wrapper'>
        <div className='Image-div'>{imageList.map((e, i) => 
          i+1 === index && <Image image = {e} /> 
        )}</div>
        <div className='Info-div'>{introduceList.map((e, i) => 
          i+1 === index && <Introduce introduce = {e} /> 
        )}</div>
      </div>
      <div className='Btn-div'>
        <button onClick={handleClick}>클릭해보세요!</button>
      </div>
    </div>
  );
}