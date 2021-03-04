function getColor (color, value) {
  //Значение Color ярче для удобства читаемости
  let result = value === "color" 
  ? `hsla(${color}, 100%, 30%, 100%)`
  : `hsla(${color}, 50%, 70%, 25%)`
  return result
};

function refreshColor() {
  let colorFromSlider = $("#slider").slider("value"),
      radioValue = $('input[name="radio"]:checked').val();

  let color = getColor(colorFromSlider, radioValue);
  $("#text-box").css(radioValue, color);
};


$(function () {
  $("#group1").buttonset();

  $("#slider").slider({
    orientation: "horizontal",
    animate: "fast",
    range: "min",
    min: 0,
    max: 360,
    values: 0,
    slide: refreshColor,
    change: refreshColor
  });

  $("#radio1").click(function() {
    $("#slider").slider("option", "value", 0)
  });

  $("#radio2").click(function() {
    $("#slider").slider("option", "value", 0);
  });
});

