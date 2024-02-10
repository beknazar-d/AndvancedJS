const buttons = document.getElementsByTagName("button"),
      dives = document.getElementsByTagName("div"),
      shapesCo = document.querySelectorAll('.shapes-container'),
      square = document.querySelectorAll('.square'),
      circle = document.querySelectorAll('.circle'),
      firstBtn = document.querySelector('.button-primary'),
      otherDiv = document.createElement('div'),
      container = document.querySelector('.container');

firstBtn.style.backgroundColor = 'green';// таким образом можно изменять элмент, как в CSS
square[1].style.width = '100px';//таким способом можно менять один элемент (выбирая и ставя порядковый номер элемента)псевдомассива 
square[1].style.cssText = 'background-color: red'//это тоже еще один способ изминения одного элемента из псевдомассива
square[0].style.borderRadius = '100%';
buttons[0].addEventListener('mouseenter',()=>{
    buttons[0].style.transition = 'all 0.5s';
    buttons[0].style.transform = 'scale(1.5)';
});
square.forEach((el)=> {
    el.style.backgroundColor = 'violet'; //Таким образом мы изменяем все элементы в псевдомассиве, но ,чтобы метод forEach сработал , нам нужно в
});                                      //в методе 'querySelectorAll', поставить точку перед названием класса элемента (queraySelectorAll('.square'))

otherDiv.classList.add('shapes-container');// Так мы добавляем класс в элемент.
//shapesCo[0].before(otherDiv);// Таким образом устанавливается элемент перед каким-то другим элементом(квадратные скобки и цифра пишутся из-за того что, элемент shpaeCo псевдомассмив)
//shapesCo[1].after(otherDiv)  ///Этим методом можно ставить элементы перед другими элемеентами.Элемент который нужно переставить, нужно писать в скобках
circle[1].remove();//  Этот метод удаляет элемент
//shapesCo[0].removeChild(circle[1]) // Ещё один метода для удаления эл.
//square[0].replaceWidth(circle[0]); /// Этот метод заменяет один элемент другим 
container.insertBefore(otherDiv,shapesCo[1]); // Ещё один метод который передвигает элемент, условия : 1.выбрать родительский эл 2,внутри метода написать первым аргументом перемещаемый элемент 3. вторым аргументом ставить, элемент перед которым будет стоять новый элемент 
