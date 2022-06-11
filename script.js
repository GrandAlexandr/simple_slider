//задали первоначальное положение (условно)
let offset = 0;
//отыскали обозначенный элемент в разметке и присвоили (нисложна)
const sliderLine = document.querySelector('.slider-line'); 
//на следующий элемент (кнопушка) повесили событие, функция имитирует анимацию и ограничивает бесконечные пролистывания
document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
//на другую кнопушку цепляем событие, суть та же, только в обратную сторону
document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});
//вариант реализации позаимствован в учебнике