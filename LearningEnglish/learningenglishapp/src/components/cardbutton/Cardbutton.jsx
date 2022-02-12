import React from 'react';
import './CardButton.scss';
import { Card } from 'antd';




export default function CardButton(props) {
    const {id,key,english,transcription,russian,translateClass} = props;
        return (
        <div className="site-card-border-less-wrapper">
         
           <Card title={english} bordered={false} id={id} key={key}>
            <p className="word-transcription">{transcription}</p>
            <p className={`${translateClass}`}>{russian}</p>
            </Card>
                </div>
    );
}