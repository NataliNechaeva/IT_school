let json = `[{
    "name": "Супермен",
    "image": "https://github.com/NataliNechaeva/IT_school/blob/TEST1/week20/superhero/image/superman.jpg",
    "activity": "борец за справедливость",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
}, {
    "name": "Железный человек",
    "image": "https://github.com/NataliNechaeva/IT_school/blob/TEST1/week20/superhero/image/ironman.jpg",
    "activity": "борец за справедливость",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
},{
    "name": "Спайдер-мен/Человек-паук",
    "image": "https://github.com/NataliNechaeva/IT_school/blob/TEST1/week20/superhero/image/spiderman.jpg",
"activity": "борец за справедливость, студент, фотограф",
"superpower": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
},{
    "name": "Капитан Америка",
    "image": "https://github.com/NataliNechaeva/IT_school/blob/TEST1/week20/superhero/image/america.jpg",
    "activity": "супер-солдат",
    "superpower": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
}]`;

document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(json);
    console.log(heroes);
    let heroesContent = "";
    for (let hero of heroes) {
        heroesContent += `<div class='herocard'>
        <h2>${hero.name}</h2>
        <div class="card__img">
        <img src="${hero.image}"></div>
        <div>Род деятельности: ${hero.activity}</div>
        <div>Суперсилы: ${hero.superpower}</div>
        </div>`
    }
    document.getElementById("heroesContainer").innerHTML = heroesContent;
});