var allButtons = $('#buttons > span')
console.log(allButtons)
for(let i=0; i< allButtons.length; i++){
  $(allButtons[i]).on('click',(x)=>{
    var index = $(x.currentTarget).index()
    var npx = index * -400
    $('#images').css({
      transform: 'translate(' + npx + 'px)'
    })
  })
}

var n = 0;
var size = allButtons.length
allButtons.eq(n%size).trigger('click')
  .addClass('red')
  .siblings('.red').removeClass('red')
setInterval(()=>{
  n += 1
  allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
}, 2000)





















//每秒自动打印 0 ~ 3
//var n = 0;
//console.log(n%4)
//setInterval(()=>{
//  n+=1
//  console.log(n%4)
//},1000)
