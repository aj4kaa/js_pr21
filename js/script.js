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
		movieList = document.querySelector('.promo__interactive-list');

	const remAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	},
	makeChanges = () => {
		document.querySelector('.promo__genre').innerText = 'драма';
		document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';
	},
	sortArr = (arr) => {
		arr.sort();
	};
	
	function addListElem(arr, elem) {
		elem.innerHTML = '';
		sortArr(arr);
		arr.forEach((item, i) => {
		elem.innerHTML += `
		<li class="promo__interactive-item">${i + 1} ${item}
			<div class="delete"></div>
		</li>
		`;
	});
		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click',() => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);

				addListElem(arr, elem);
			});
		});
	}

	// sortArr(movieDB.movies);
	remAdv(img);
	addListElem(movieDB.movies, movieList);
	makeChanges();

	addForm.addEventListener('submit', (event) => {
		event.preventDefault();
		let newFilm = input.value;
		if (newFilm.length >= 21) {
			newFilm = `${newFilm.substr(0, 21)}...`;
			movieDB.movies.push(newFilm.toUpperCase());
		} else if (newFilm.length < 21 && newFilm.length > 0) {
			movieDB.movies.push(newFilm.toUpperCase());
		} else if (newFilm == "") {
			console.log('Введите название фильма');
		} else {
			console.log('error');
		}
		if (favorite.checked && newFilm.length > 1) {
			console.log(`Добавляем любимый фильм: ${newFilm}`);
		}
		addListElem(movieDB.movies, movieList);
		event.target.reset();
	});
});