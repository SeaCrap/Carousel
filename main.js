
  $(p1).on('click',()=>{
    $(images).removeClass('pic2')
    .removeClass('pic3')
    .removeClass('pic4')
    .addClass('pic1')
  })

  $(p2).on('click',()=>{
    $(images).removeClass('pic1')
    .removeClass('pic3')
    .removeClass('pic4')
    .addClass('pic2')
  })

  $(p3).on('click',()=>{
     $(images).removeClass('pic1')
    .removeClass('pic2')
    .removeClass('pic4')
    .addClass('pic3') 
  })
  
  $(p4).on('click',()=>{
      $(images).removeClass('pic1')
    .removeClass('pic2')
    .removeClass('pic3')
    .addClass('pic4')
  })

