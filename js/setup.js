'use strict';
var WIZARD_COUNT = 4;
var wizardsData = [];
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var randomiser = function (rand) {
  var randomElement = Math.floor(Math.random() * rand) + 1;
  return randomElement;
};

var getWizardObject = function () {
  var wizardObject = {
    name: WIZARD_NAMES[randomiser(WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[randomiser(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomiser(COAT_COLORS.length)],
    eyesColor: EYES_COLOR[randomiser(EYES_COLOR.length)]
  };
  return wizardObject;
};

var generateWizardsData = function () {
  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizardsData.push(getWizardObject());
  }
};

var fillWizardTemplate = function (wizardObject) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardObject.name + wizardObject.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardObject.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardObject.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(fillWizardTemplate(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');
};

generateWizardsData();
renderWizards(wizardsData);

// вторая часть
var openSetup = document.querySelector('.setup-open');
var setupPopup = document.querySelector('.setup');
var closeSetup = setupPopup.querySelector('.setup-close');
var wizardNameInput = document.querySelector('.setup-user-name');
var saveWizardSettings = setupPopup.querySelector('.setup-submit');
var setupWizardForm = document.querySelector('.setup-wizard-form');

var popupCloseEscape = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    setupPopup.classList.add('hidden');
  }
};

var openPopup = function () {
  setupPopup.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' && wizardNameInput.focus !== true) { // Судя по всему, не работает
      evt.preventDefault();
      setupPopup.classList.add('hidden');
    }
  });
};

var closePopup = function () {
  setupPopup.classList.add('hidden');

  document.removeEventListener('keydown', popupCloseEscape);
};

openSetup.addEventListener('click', function () {
  openPopup();
});

openSetup.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    openPopup();
  }
});

closeSetup.addEventListener('click', function () {
  closePopup();
});

closeSetup.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// Отправка формы

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

// function wizardFormSubmit() {
//   setupWizardForm.action = 'https://javascript.pages.academy/code-and-magick';
//   setupWizardForm.method = 'post';
//   document.body.append(setupWizardForm);
//   setupWizardForm.submit();
//   console.log('done');
// }

wizardNameInput.addEventListener('input', function () {
  var wizardNameLength = wizardNameInput.value.length;

  if (wizardNameLength < MIN_NAME_LENGTH) {
    wizardNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - wizardNameLength) + ' символов');
  } else if (wizardNameLength > MAX_NAME_LENGTH) {
    wizardNameInput.setCustomValidity('Уберите лишние ' + (MAX_NAME_LENGTH - wizardNameLength) + ' символов');
  } else {
    wizardNameInput.setCustomValidity(' ');
  }
});

// saveWizardSettings.addEventListener('click', wizardFormSubmit());
// saveWizardSettings.addEventListener('keydown', function () {
//   if (evt.key === 'Enter') {
//     wizardFormSubmit();
//   };
// });

// Изменение цвета

var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setupWizard = setupPopup.querySelector('.setup-wizard');
var wizardCoatColor = setupWizard.querySelector('.wizard-coat');
var wizardEyeColor = setupWizard.querySelector('.wizard-eyes');
var wizardFireballColor = setupPopup.querySelector('.setup-fireball-wrap');


wizardCoatColor.addEventListener('click', function () {
  wizardCoatColor.style.fill = COAT_COLORS[randomiser(COAT_COLORS.length)];
  setupPopup.querySelector('[name="coat-color"]').value = wizardCoatColor.style.fill;
});

wizardEyeColor.addEventListener('click', function () {
  wizardEyeColor.style.fill = EYES_COLOR[randomiser(EYES_COLOR.length)];
  setupPopup.querySelector('[name="eyes-color"]').value = wizardEyeColor.style.fill;
});

wizardFireballColor.addEventListener('click', function () {
  var fireballColorRandom = FIREBALL_COLOR[randomiser(FIREBALL_COLOR.length)];
  wizardFireballColor.style.background = fireballColorRandom;
  wizardFireballColor.querySelector('[name="fireball-color"]').value = fireballColorRandom;
});
