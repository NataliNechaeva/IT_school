function formatDate(date) {
    let variance = new Date() - date; 
  
    if (variance < 1000) { 
      return 'прямо сейчас';
    }
    let seconds = Math.floor(variance / 1000);
    if (seconds < 60) {
        return seconds + ' сек. назад';
      }
    
      let min = Math.floor(variance / 60000); // преобразовать разницу в минуты
    if (min < 60) {
    return min + ' мин. назад';
    }
    
    let d = date;
    d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2));
return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
alert( formatDate(new Date(new Date - 1)) ); 

alert( formatDate(new Date(new Date - 30 * 1000)) ); 

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 

alert( formatDate(new Date(new Date - 86400 * 1000)) );