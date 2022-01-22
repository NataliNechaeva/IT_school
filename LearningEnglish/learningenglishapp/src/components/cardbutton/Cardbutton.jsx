import React, { useState } from 'react';
import './CardButton.scss';
import { Card } from 'antd';




export default function CardButton(props) {
    const {english,transcription,russian} = props;
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed)
    }
    
    let buttonClass="";
    let translateClass="";
    if(pressed) buttonClass="invisible";
    if(pressed) translateClass="visibletranslate";
    
    return (
        <div className="site-card-border-less-wrapper">
           <Card title={english} bordered={false} style={{ width: 300 }}>
            <p className="word-transcription">{transcription}</p>
            <p className={`translate ${translateClass}`}>{russian}</p>
            <button className={`button ${buttonClass}`} {...props} onClick={handleChange} > Перевод </button></Card>
                </div>
    );
}