var allButtons = $('#buttons > span')
console.log(allButtons)
for(let i=0; i< allButtons.length; i++){
  $(allButtons[i]).on('click',(x)=>{
    var index = $(x.currentTarget).index()
    var npx = index * -400
    $('#images').css({
      transform: 'translate(' + npx + 'px)'
    })
    
    //点击按钮高亮
    var n = index
    allButtons.eq(n)
      .addClass('red')
      .siblings('.red').removeClass('red')
  })
}








//自动播放、按钮高亮
var n = 0;
var size = allButtons.length
activeButton(allButtons.eq(n % size))
var timerId = setInterval(()=>{// 闹钟去个名字
  n += 1
  activeButton(allButtons.eq(n % size))
}, 2000)

//点击按钮，然后添加class类
function activeButton($button){//这里需要传入一个按钮 由于需要Jquery对象，所以需要$开头
   $button.trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
}



// 鼠标移入暂停、移开继续
$('.window').on('mouseenter',()=>{
  window.clearInterval(timerId) //清楚闹钟
})

$('.window').on('mouseleave',()=>{
  timerId = setInterval(()=>{// 闹钟去个名字
    n += 1
    allButtons.eq(n%size).trigger('click')
      .addClass('red')
      .siblings('.red').removeClass('red')
  }, 2000)
})



















//每秒自动打印 0 ~ 3
//var n = 0;
//console.log(n%4)
//setInterval(()=>{
//  n+=1
//  console.log(n%4)
//},1000)
