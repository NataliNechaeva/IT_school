import React, { useState } from 'react';
import CardButton from '../CardButton/CardButton'
import originData from '../../data'
import { Pagination } from 'antd';
import './EnglishCards.scss';




export default function EnglishCard() {
    const [page, setPage] = useState(0);
    const lastCard=[originData.length];
    const onChange = page => {
        setPage(page-1);
        console.log(page)};
    const cards = [originData[page]];
    console.log(cards)

    return(
        <div><div>
            {
        cards.map((cards) => 
        <CardButton 
        key = {cards.id}
        english={cards.english}
        transcription={cards.transcription}
        russian={cards.russian}/> 
        )
    }</div> <div className="pagination"><Pagination simple defaultCurrent={1} total={lastCard} pageSize={1} onChange={onChange}/> </div></div> )}