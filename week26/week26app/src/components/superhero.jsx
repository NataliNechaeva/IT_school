import './superhero.css';

function Superhero(props) {
    return (
        <div className="superhero-card">
            <div className="hero-name">{props.name}</div>
            <img src={props.image} alt="" />
            <div className="hero-activity">{props.activity}</div>
            <div className="hero-superpower">{props.superpower}</div>
        </div>
    );
}

export default Superhero;