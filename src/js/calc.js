// Функция для выполнения операции
function calculate() {
    var num1 = parseFloat(document.getElementsByName("num1")[0].value);
    var num2 = parseFloat(document.getElementsByName("num2")[0].value);
    var operator = document.querySelector(".operations__btn.active").textContent;
    var resultField = document.getElementsByName("result-field")[0];
  
    if (!isNaN(num1) && !isNaN(num2)) {
      switch (operator) {
        case "+":
          resultField.value = num1 + num2;
          break;
        case "-":
          resultField.value = num1 - num2;
          break;
        case "*":
          resultField.value = num1 * num2;
          break;
        case "/":
          if (num2 !== 0) {
            resultField.value = num1 / num2;
          } else {
            resultField.value = "Заборонено!";
          }
          break;
        default:
          resultField.value = "Выберите операцию";
      }
    } else {
      resultField.value = "Введите числа";
    }
  }
  
  // Добавляем обработчики событий для кнопок операций
  var operationButtons = document.querySelectorAll(".operations__btn");
  for (var i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", function () {
      // Удаляем класс 'active' у всех кнопок операций
      for (var j = 0; j < operationButtons.length; j++) {
        operationButtons[j].classList.remove("active");
      }
      // Добавляем класс 'active' к выбранной кнопке
      this.classList.add("active");
    });
  }
  
  // Добавляем обработчик события для отправки формы
  var calcForm = document.querySelector(".calc-block");
  calcForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Предотвращаем отправку формы
    calculate(); // Вызываем функцию calculate при отправке формы
  });
  
  // Изменение результат поля при изменении чисел или оператора
  var inputs = document.querySelectorAll(".calc__input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", calculate);
  }
  