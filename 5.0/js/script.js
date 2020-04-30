let links = document.querySelectorAll('.menu-item');
let list = document.querySelector('.menu');
let titleEl = document.querySelector('.title');
let advertEl = document.querySelector('.adv');
let columnEl = document.querySelectorAll('.column');
let promptEl = document.querySelector('.prompt');
let doYouLikeApple = prompt('Как вы относитесь к технике Apple?');


list.insertBefore(links[2], links[1]);

document.body.style.backgroundImage = `url("img/apple_true.jpg")`;

titleEl.textContent = 'Мы продаем только подлинную технику Apple';

columnEl[1].removeChild(advertEl);

promptEl.textContent = doYouLikeApple;







