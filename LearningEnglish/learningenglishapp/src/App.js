import './App.css';
import Word from './components/word';

const words = [{
  english: "cat",
  image: "https://sun9-25.userapi.com/c5348/u153148840/d_27d2cfeb.jpg",
  transcription: "[kæt]",
  translation: "кошка, кот"
}, {
  english: "dog",
  image: "https://sun9-11.userapi.com/c9890/g31001443/d_0336da39.jpg",
  transcription: "[dɒg]",
  translation: "собака, пес"
},{
  english: "mouse",
  image: "https://cs6.pikabu.ru/avatars/1502/v1502933-1808232325.jpg",
  transcription: "mouse",
  translation: "мышь, мышка"
},{
  english: "pig",
  image: "https://cdn1.flamp.ru/36e644817d85c883e33e0ab778560cf1_100_100.jpg",
  transcription: "pig",
  translation: "свинья, поросенок"
}];

function App() {
  return (
    <div className="App">
      {
        words.map((word) => 
        <Word english={word.english} image={word.image} transcription={word.transcription} translation={word.translation}></Word>
        
        )
      }
    </div>
  );
}

export default App;

