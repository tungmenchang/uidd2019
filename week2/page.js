$(document).ready(function(){
  var i;
  for(i=0;i<2;i++){
    $('.buttompic').transition('pulse', '600ms');
  }
})

$('.buttompic').click(function(){
  buttom();
  setTimeout("fadeout()",300);
  setTimeout("slidein()",1100);
  setTimeout("showbeer()",2500);
  setTimeout("showburger()",3500);
  setTimeout("showplate()",4500);
  setTimeout("showtag()",5300);
  setTimeout("settag1()",5500);
  setTimeout("settag2()",5700);
  setTimeout("settag3()",5900);
  setTimeout("pink()",6200);
});

function buttom(){ 
  $('.buttompic').transition('stop all');
  $('.buttompic').css({'transform':'scale(20)',
                       'opacity':'0',
                       transition:'0.8s '
                      });
  $('.dot').css({'opacity':'0',
                 'transition':'0.3s'
                });
}

function fadeout(){
  $('.firstpic').css({'opacity':'0',
                      'transition':'1.3s'
                     });
}

function slidein(){
  $('#container2').css({'opacity':'1'}).css({'left':'18%',
                 'transition':'1.5s ease-out'
                 
  });
}

function showbeer(){
  $('.beer').css({'opacity':'1'}).transition('bounce','0.8s');
}

function showburger(){
  $('.burger').css({'opacity':'1'}).transition('bounce','0.8s');
}

function showplate(){
  $('.plate').css({'opacity':'1'}).transition('bounce','0.8s');
}

function showtag(){
  $('.tag').css({'opacity':'1'});
}

function settag1(){
  $('.tag').css({'transform':'rotate(-10deg)',
                 'transition':'0.2s'
  });
  
}

function settag2(){
  $('.tag').css({'transform':'rotate(17deg)',
                 'transition':'0.2s'
  });
}

function settag3(){
  $('.tag').css({'transform':'rotate(-7deg)',
                 'transition':'0.2s'
  });
}

function pink(){
   $('.low.buttom').addClass('pink');
}

$('.buttom').click(function(){
  $('.buttom').removeClass('start');
  $(this).addClass('start');
});

$('.buttom.low').click(function(){
  $('.buttom').removeClass('start');
  $(".buttom:first").addClass('start');
});

