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
    wizardsData.push(getWizardObject);
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
  var fragment = document.createDocumentFragment;
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(fillWizardTemplate(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var openPopup = function () {
  document.querySelector('.setup').classList.remove('hidden');
};

generateWizardsData();
renderWizards(wizardsData);
openPopup();
