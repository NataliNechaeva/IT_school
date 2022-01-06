
import './App.css';
import Rate from './components/cards';

const rates = [{
  title: "Безлимитный 300",
  price: "300 руб/мес",
  value: "до 10 Мбит/сек",
  description: "Объем включенного трафика не ограничен"
}, {
  title: "Безлимитный 450",
  price: "450 руб/мес",
  value: "до 50 Мбит/сек",
  description: "Объем включенного трафика не ограничен"
},{
  title: "Безлимитный 550",
  price: "550 руб/мес",
  value: "до 100 Мбит/сек",
  description: "Объем включенного трафика не ограничен",
},{
  title: "Безлимитный 1000",
  price: "1000 руб/мес",
  value: "до 200 Мбит/сек",
  description: "Объем включенного трафика не ограничен"
}];


function App(){
  return(
    <div className="wrapper">
      {
        rates.map((rate) => 
        <Rate title={rate.title} price={rate.price} value={rate.value} description={rate.description}></Rate>
        )
      }
    </div>)
}


export default App;

