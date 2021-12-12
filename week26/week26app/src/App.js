
import './App.css';
import Superhero from './components/superhero';

const superheroes = [{
  name: "Супермен",
  image: "https://s1.bukalapak.com/avt/68675535/small/c4950a963559f05e53b6.",
  activity: "борец за справедливость",
  superpower: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
}, {
  name: "Железный человек",
  image: "https://pp.userapi.com/c301503/v301503978/5c51/a3MH_n13aB0.jpg",
  activity: "борец за справедливость",
  superpower: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
},{
  name: "Спайдер-мен/Человек-паук",
  image: "https://thumb-p8.xhcdn.com/a/oLSEZg9hN_J9ug3mt5bNmg/000/022/427/478_100.jpg",
activity: "борец за справедливость, студент, фотограф",
superpower: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
},{
  name: "Капитан Америка",
  image: "https://avatars.mds.yandex.net/get-yapic/59871/1mRPtUe27g7o0JxRI6JKRLnUR0-1/islands-retina-50",
  activity: "супер-солдат",
  superpower: "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
}];

function App() {
  return (
    <div className="App">
      {
        superheroes.map((superhero) => 
        <Superhero name={superhero.name} image={superhero.image} activity={superhero.activity} superpower={superhero.superpower}></Superhero>
        
        )
      }
    </div>
  );
}

export default App;
