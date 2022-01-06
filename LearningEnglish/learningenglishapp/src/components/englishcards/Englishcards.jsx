import originData from '../../data'
import CardButton from '../cardbutton/Cardbutton';

export default function EnglishCard(props) {
    return( 
        originData.map((originData) => 
        <CardButton english={originData.english} transcription={originData.transcription} russian={originData.russian}></CardButton>
    ))
}