import React, {useState} from 'react';

import Image from "./components/Image";
import Introduce from "./components/Introduce";

import {nephew1,nephew2,nephew3,nephew4,nephew5,nephew6,nephew7,nephew8} from "./assets/index";
import { introduceList } from './assets/introduceList';
import './App.css';

export default function App() {

  const [index, setIndex] = useState(1);

  const title = "우리 요한이를 소개합니다."
  const imageList = [nephew1,nephew2,nephew3,nephew4,nephew5,nephew6,nephew7,nephew8];

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
        <button className="button" onClick={handleClick}>클릭해보세요!</button>
      </div>
    </div>
  );
}