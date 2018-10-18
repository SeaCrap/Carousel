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
    activeButton(allButtons.eq(n))
  })
}


//自动播放、按钮高亮
var n = 0;
var size = allButtons.length
playSilde(n % size)
var timerId = setTimer()

// 鼠标移入暂停、移开继续
$('.window').on('mouseenter',()=>{
  window.clearInterval(timerId) //清楚闹钟
})

$('.window').on('mouseleave',()=>{
  timerId = setTimer()
})



//封装1：激活button 添加class类
function activeButton($button){//需要传入一个button，需要获取jquery对象，所以要$开头
    $button
      .addClass('red')
      .siblings('.red').removeClass('red')
}

//自动播放
function playSilde(index){
  allButtons.eq(index).trigger('click')
}

//设置闹钟
function setTimer(){
  return setInterval(()=>{// 闹钟去个名字
    n += 1
    playSilde(n % size) 
  }, 2000)
}

















//每秒自动打印 0 ~ 3
//var n = 0;
//console.log(n%4)
//setInterval(()=>{
//  n+=1
//  console.log(n%4)
//},1000)
