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
allButtons.eq(n%4).trigger('click')
setInterval(()=>{
  n += 1
  allButtons.eq(n%4).trigger('click')
}, 2000)





















//每秒自动打印 0 ~ 3
//var n = 0;
//console.log(n%4)
//setInterval(()=>{
//  n+=1
//  console.log(n%4)
//},1000)
