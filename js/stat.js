'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 20;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 40;
var BAR_HEIGHT = CLOUD_HEIGHT - (CLOUD_HEIGHT + FONT_GAP + TEXT_HEIGHT);

var canvas = document.getElementsById('canvas');
var txt = canvas.getContext('2d');
txt.font = '16px PT Mono';
txt.fillText('Ура вы победили!\nСписок результатов:');

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + i * BAR_WIDTH + (i + 1) * GAP, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillRect(CLOUD_X + i * BAR_WIDTH + (i + 1) * GAP, CLOUD_HEIGHT - FONT_GAP - TEXT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
