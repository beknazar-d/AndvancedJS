'use strict';
// Таким образом получаем элемент со страницы по ID;

const box = document.getElementById('box');
console.log(box);

//Здесь мы получили элементы по названию "Тэгов", и так как элементов больше одного , мы получили псевдо массив ;
//Чтобы получить определённый один элемент ,нам нужно добавить в конец кода вот это -->> ('button')[номер элемента];
const btns = document.getElementsByTagName('button');
console.log(btns[0]);
console.log(btns);
//Когда мы получаем тэги со страницы и если это даже один тэг мы получаем псевдо массив 
//И поэтому ,чтобы работать с элементом нам нужно в конце кода нужно добавлять номер элемента, как в примере сверху;

//Получение элементов по классу , тут тоже работают те же правила ,за исключением того что этот метод работает по классам;
const circles = document.getElementsByClassName('circle');

//Получение элементов по селекторам множество эементов 
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
//Получение элементов по селектору
const oneHeart = document.querySelector('.heart');