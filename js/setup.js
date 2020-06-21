'use strict';
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var randomiser = function (rand) {
  var randomElement = Math.floor(Math.random() * rand) + 1;
  return randomElement;
};
var wizardData = [
  {
    name: WIZARD_NAMES[randomiser(WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[randomiser(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomiser(COAT_COLORS.length)],
    eyesColor: EYES_COLOR[randomiser(EYES_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[randomiser(WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[randomiser(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomiser(COAT_COLORS.length)],
    eyesColor: EYES_COLOR[randomiser(EYES_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[randomiser(WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[randomiser(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomiser(COAT_COLORS.length)],
    eyesColor: EYES_COLOR[randomiser(EYES_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[randomiser(WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[randomiser(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[randomiser(COAT_COLORS.length)],
    eyesColor: EYES_COLOR[randomiser(EYES_COLOR.length)]
  }
];

for (var i = 0; i < wizardData.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardData[i].name + wizardData[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardData[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardData[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');
