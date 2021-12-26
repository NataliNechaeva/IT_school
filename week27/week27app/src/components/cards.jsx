import React from 'react';
import './cards.scss';


class Rate extends React.Component {
  render () {
    const {title,price,value,description,isSelected} = this.props;
    let rateClass="";
    if(isSelected) rateClass="selected";
    return (
    <div className={`rate ${rateClass}`}>
  <h1 className="rate-title">{title}</h1>
  <h2 className="rate-price">{price}</h2>
  <h3 className="rate-value">{value}</h3>
  <p className="rate-description">{description}</p>
  </div>    
  )
}
}
export default Rate;