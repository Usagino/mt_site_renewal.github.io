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


let app = new Vue({
  el:'#contet',
  data:{
    scrollY: 0,
    timer: null
  },
  created: function(){
    //ハンドラを登録
    window.addEventListener('scroll',this.handleScroll)
  },
  beforeDestroy: function(){
    //ハンドラを解除(コンポーネントやSPAの場合忘れずに)
    window.removeEventListener('scroll',this.handleScroll)
  },
  methods:{
     // 違和感のない程度に200ms感覚でデータを更新する例
    handleScroll: function(){
      if(this.timer === null){
        this.timer = setTimeout(function(){
          this.scrollY = window.scrollY
           //スクロールごとにコンソールに現在の高さを表示
          console.log(this.scrollY)
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
    }
  }
})
