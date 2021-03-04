function getColor (color, value) {
  //Значение Color ярче для удобства читаемости
  let result = value === "color" 
  ? `hsla(${color}, 100%, 30%, 100%)`
  : `hsla(${color}, 50%, 70%, 25%)`
  return result
};

function refreshColor() {

  let colorFromSlider = $("#slider").slider("value")
      radioValue = $('input[name="radio"]:checked').val();

  if (radioValue) {
    let color = getColor(colorFromSlider, radioValue)
    $("#text-box").css(radioValue, color);
  } else {
    
  }
};

$(function () {
  $("#group1").buttonset();

  $('input[name="radio"]').click(refreshColor);

  $("#slider").slider({
    orientation: "horizontal",
    animate: "slow",
    range: "min",
    min: 0,
    max: 360,
    value: 0,
    start: refreshColor,
    slide: refreshColor,
    change: refreshColor
  })
});

