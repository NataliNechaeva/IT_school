import React, { useState } from 'react';
import CardButton from '../CardButton/CardButton'
import originData from '../../data'
import { Pagination } from 'antd';
import './EnglishCards.scss';
import './CardButton.scss';




export default function EnglishCard() {
    const [page, setPage] = useState(0);
    const [pressed, setPressed] = useState(false);
    const [buttonClass, setClass] = useState("");
    const [learned, setLearned] = useState([]);
    const lastCard=[originData.length];
    const cards = [originData[page]];
    
    const onChange = page => {
        setPage(page-1);
        setClass("");
        console.log(buttonClass)
    };
    const handleClick = () => {
        setPressed(!pressed);
        setClass("invisible");
        const newArr = new Set(learned); 
        newArr.add(cards);
        setLearned(Array.from(newArr));
        console.log(learned);
    };
        
    return(
        <div>
            <p>Вы изучили {learned.length} слов</p> 
            <div>
            {
        cards.map((cards) => 
        <CardButton 
        key={cards.id}
        id={cards.id}
        english={cards.english}
        transcription={cards.transcription}
        russian={cards.russian}
/> 
)
    }</div> <div><button className={`button ${buttonClass}`}  onClick={()=>handleClick()}> Перевод </button> </div>
    <div className="pagination"><Pagination simple defaultCurrent={1} total={lastCard} pageSize={1} onChange={onChange}/> </div></div> )}