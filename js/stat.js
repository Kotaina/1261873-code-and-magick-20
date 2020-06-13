'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 20;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 40;
var BAR_HEIGHT = CLOUD_HEIGHT - (CLOUD_HEIGHT + FONT_GAP + TEXT_HEIGHT);
var BAR_COLOR = 'rgba(255, 0, 0, 1)';

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderCloudShadow = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudBody = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloud = function (ctx) {
  renderCloudShadow(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloudBody(ctx, CLOUD_X, CLOUD_Y, '#fff');
};

var renderCloudTitle = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов: ', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + TEXT_HEIGHT * 2);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx);
  renderCloudTitle(ctx);
  renderCloudResult(ctx, times);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], CLOUD_X + i * BAR_WIDTH + (i + 1) * GAP, CLOUD_HEIGHT - FONT_GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = BAR_COLOR;
    } else {
      var saturation = Math.floor(Math.random() * 100) + 1;
      var gradColor = 'hsl(110,' + saturation + '%,60%)';
      ctx.fillStyle = gradColor;
    }
    ctx.fillRect(CLOUD_X + i * BAR_WIDTH + (i + 1) * GAP, CLOUD_HEIGHT - FONT_GAP - TEXT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};

var renderCloudResult = function (ctx, times) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  for (var i = 0; i < times.length; i++) {
    var playerResult = Math.round(times[i]);
    var maxTime = getMaxElement(times);
    console.log(times[i]);
    ctx.fillText(playerResult, CLOUD_X + i * BAR_WIDTH + (i + 1) * GAP, CLOUD_HEIGHT - TEXT_HEIGHT - times[i] / 37.8);
  }
};
