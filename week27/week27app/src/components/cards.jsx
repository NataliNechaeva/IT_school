import React from 'react';
import './cards.scss';
import { Button } from 'antd';


class Rate extends React.Component {
  state = {
    checked: false,
  };
  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };
  render () {
    const {title,price,value,description} = this.props;
    let rateClass="";
    if(this.state.checked) rateClass="selected";
    return (
  <div className={`rate ${rateClass}`}>
  <h1 className="rate-title">{title}</h1>
  <h2 className="rate-price">{price}</h2>
  <h3 className="rate-value">{value}</h3>
  <p className="rate-description">{description}</p>
  <Button type="primary" size="large"onClick={this.toggleChecked}> {!this.state.checked ? 'Не выбрано' : 'Мой тариф'}</Button>
          
  </div>    
  )
}
}
export default Rate;