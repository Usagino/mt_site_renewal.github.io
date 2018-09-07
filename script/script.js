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
      id_num :i,
      back:backt_and_title[i],
      title:backt_and_title[i],
      tape:backt_and_title[i],
      section:sections[i++]

    }
  }
})
let contents = new Vue({
  el:"#contents"
})

let footer = new Vue({
  el: "#footer"
})

VueScrollTo.setDefaults({

    duration: 1000,
    easing: "ease-in-out",

})

let tape_num_list = [];

for (let i = 0; i < 3; i++) {
  let tape_num = document.getElementById( `section_image_${i}` ).getBoundingClientRect().top;
  tape_num_list.push(tape_num);
}
console.log(tape_num_list);

new Vue({
  el: 'html',
  data: {
  	scrollY: 0
  },
  mounted() {
  	window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
  		this.scrollY = window.scrollY;
    }
  }
})
