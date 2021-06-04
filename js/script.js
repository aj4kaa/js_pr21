/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

// document.querySelector('.promo__adv').remove();

let img = document.querySelectorAll('.promo__adv img'),
	movieList = document.querySelector('.promo__interactive-list');
console.log(movieList);
	movieList.innerHTML = '';

img.forEach(item => {
	item.remove();
});

document.querySelector('.promo__genre').innerText = 'драма';

// document.querySelector('.promo__bg').style.cssText = 'background: url("../img/bg.jpg") center center/cover no-repeat';
document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';

let films = document.querySelectorAll('.promo__interactive-item');

movieDB.movies.sort();



movieDB.movies.forEach((item, i) => {
	movieList.innerHTML += `
	<li class="promo__interactive-item">${i + 1} ${item}
		<div class="delete"></div>
	</li>
	`;
});