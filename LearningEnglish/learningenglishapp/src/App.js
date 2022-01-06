import './App.scss';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import EditableTable from './components/table/Table';
import EnglishCard from './components/englishcards/Englishcards';


function App(){
  return(
    <div className="wrapper">
      <div className="englishCard">{<EnglishCard />}</div> <div className="englishTable">{<EditableTable/>} </div>
        
    </div>)
}
export default App;
