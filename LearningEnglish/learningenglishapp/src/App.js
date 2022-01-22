import './App.scss';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import EditableTable from './components/Table/table';
import EnglishCard from './components/EnglishCards/EnglishCards';



function App(){
  return(
    <div className="wrapper">
      <div className="englishCard">{<EnglishCard />}</div> <div className="englishTable">{<EditableTable/>} </div>
        
    </div>)
}
export default App;
