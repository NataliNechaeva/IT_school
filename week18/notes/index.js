let arrayNotes = [];

// Функция, которая генерирует Заметку
document.addEventListener("DOMContentLoaded", function(event){
  
if (localStorage.getItem('notestext') != null) {
  arrayNotes = JSON.parse(localStorage.getItem('notestext'));
  for(let i = 0; i < arrayNotes.length; i++){
    let cardnoteshistory = document.createElement('div');
    cardnoteshistory.classList.add('card');
    document.querySelector('#container').appendChild(cardnoteshistory);
    cardnoteshistory.textContent = arrayNotes[i];
  }
}
});
const generateNotes = () =>{
    let cardnotes = document.createElement('div');
    cardnotes.classList.add('card');
    cardnotes.textContent = document.querySelector('#notes').value;
    console.log(cardnotes.textContent);
    document.querySelector('#container').appendChild(cardnotes);
    //return cardnotes
}

document.querySelector('#add').addEventListener('click', () => {
    let notestext = document.querySelector('#notes').value;
    const newCard = generateNotes(notestext);
    console.log(notestext);

    arrayNotes.push(notestext);
    localStorage.setItem('notestext', JSON.stringify(arrayNotes));
    document.querySelector('#notes').value = '';
  });

document.querySelector('#clear').addEventListener('click', 
 () => {
  document.querySelectorAll('.card').forEach(e =>e.remove());
    localStorage.clear();
    arrayNotes = [];
});
