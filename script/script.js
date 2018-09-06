$(function(){
  let random_color;
  for (let i = 1; i <= 3; i++) {
    random_color = Math.floor(Math.random() * 360);
    $("li:nth-child("+i+") span").css('background','hsl(' + random_color + ', 62%, 73%)')
  }
})

let backt_and_title = [
  "water","crayon","colorpencil"
]
let sections =[
  '美しい色彩のグラデーション',
  '温もりある手書きのタッチ',
  '繊細あるニュアンスを楽しむ'
]
let i=0;
Vue.component('content-com',{
  template:"#content-component",
  data:function(){
    return{
      back:backt_and_title[i],
      title:backt_and_title[i],
      section:sections[i++]
    }
  }
})
let app = new Vue({
  el:"#contents"
})
