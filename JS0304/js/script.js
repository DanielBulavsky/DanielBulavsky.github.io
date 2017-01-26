// "el" prefix for DOM-variables
// parEl -  (parentElement)
var parEl = document.body;
var elForm = document.createElement('form');
var elh1 = document.createElement('h1');
var elOl = document.createElement('ol');
var questQuantity = 3;
var optionQuantity = 3;
parEl.appendChild(elForm);
  parEl = elForm;
  elh1.innerHTML = 'Тест по программированию'

  parEl.appendChild(elh1);
  parEl.appendChild(elOl);

  for (var i = 1; i <= questQuantity; i++) {
    parEl = elOl;
    var elLi = document.createElement('li');
    elLi.innerHTML = 'Вопрос №' + i;
    parEl.appendChild(elLi);

    parEl = elLi;

    var elBr = document.createElement('br');
    parEl.appendChild(elBr);

    for (var j = 1; j <= optionQuantity; j++) {
      parEl = elLi;

      var elInpCheck = document.createElement('input');
      elInpCheck.setAttribute('type', 'checkbox');
      elInpCheck.setAttribute('id', 'cb' + i + j);
      parEl.appendChild(elInpCheck);

      var elLabel = document.createElement('label');
      elLabel.innerHTML = 'Вариант Ответа №' + j;
      elLabel.setAttribute('for', 'cb' + i + j);
      parEl.appendChild(elLabel);


      var elBr = document.createElement('br');
      parEl.appendChild(elBr);
    }
  }

parEl = elForm;
var elSubmit = document.createElement('button');
elSubmit.setAttribute("type", "submit");
elSubmit.innerHTML = 'Проверить мои результаты';
elSubmit.className = "submit-button";
parEl.appendChild(elSubmit);
parEl = elForm;
