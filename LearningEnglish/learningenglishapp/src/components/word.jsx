import './word.css';

function Word(props) {
    return (
        <div className="word-card">
            <div className="word-english">{props.english}</div>
            <img src={props.image} alt="" />
            <div className="word-transcription">{props.transcription}</div>
            <div className="word-translation">{props.translation}</div>
        </div>
    );
}

export default Word;