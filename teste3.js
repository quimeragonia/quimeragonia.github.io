$(document).ready(function () {
  animateDiv();
});

function makeNewPosition($container) {
  // Get viewport dimensions (remove the dimension of the div)
  $container = $container;
  var h = $container.height() - $(".circles").width();
  var w = $container.width() - $(".circles").height();

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv() {
  var $target = $(".circles");
  var newq = makeNewPosition($(".parent"));
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $(".circles").animate({ top: newq[0], left: newq[1] }, speed, function () {
    animateDiv();
  });
  $(".fg").animate(
    { top: "-" + newq[0], left: "-" + newq[1] },
    speed,
    function () {
      animateDiv();
    }
  );
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}
