var link = document.querySelector(".button-contact"); //Находим элемент на который будем воздействовать//

var popup = document.querySelector(".form-answer"); // Находим скрытый попап//
var close = popup.querySelector(".modal-close"); //Находим кнопку закрытия модального окна//

link.addEventListener("click", function (evt) { //Отлавливаем событие по клику//
  evt.preventDefault();                        //Отменяем действия ссылки по умолчанию//
  popup.classList.add("modal-show"); //добавляем этот класс к модальному окну по клику на ссылку//
console.log(popup);
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
console.log(popup);
});

