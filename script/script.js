$(function(){
  let random_color;
  for (let i = 1; i <= 3; i++) {
    random_color = Math.floor(Math.random() * 360);
    $("li:nth-child("+i+") span").css('background','hsl(' + random_color + ', 62%, 73%)')
  }
})
