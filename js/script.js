/* Задания на урок 1:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
	
	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	},
		input = document.querySelector('.adding__input'),
		addForm = document.querySelector('form.add'),
		favorite = addForm.querySelector('[type="checkbox"]'),
		img = document.querySelectorAll('.promo__adv img'),
		movieList = document.querySelector('.promo__interactive-list'),
		deleteBtn = document.querySelectorAll('.delete');

	const remAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};
	
	function addListElem() {
		movieList.innerHTML = '';
		movieDB.movies.sort();
		movieDB.movies.forEach((item, i) => {
		movieList.innerHTML += `
		<li class="promo__interactive-item">${i + 1} ${item}
			<div class="delete"></div>
		</li>
		`;
	});
	}
	remAdv(img);
	addListElem();

	document.querySelector('.promo__genre').innerText = 'драма';
	document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';
	
	addForm.addEventListener('submit', (event) => {
		event.preventDefault();
		if (input.value.length >= 21) {
			let str1 = input.value.substr(0, 21);
			str1 += '...';
			movieDB.movies.push(str1.toUpperCase());
			addListElem();
			event.target.reset();
		} else if (input.value.length < 21 && input.value.length > 0) {
			movieDB.movies.push(input.value.toUpperCase());
			addListElem();
			event.target.reset();
		} else if (input.value == "") {
			console.log('Введите название фильма');
		} else {
			console.log('error');
		}
		if (favorite.checked) {
			console.log('Добавляем любимый фильм');
		}
	});

	// deleteBtn.forEach(item => {
	// 	console.log(item);
	// 	item.addEventListener('mouseup',asd => {
	// 		console.log('addListElem');
	// 	});
	// });
});