// document.onmousemove = function (event){
//   let x = event.x-720;
//   let y = event.y-340;
//   console.log (x+' '+y);
//   document.querySelector('.y-1').style.transform = 'rotate(45deg)';
// }

$(document).ready(function(){

  $(".red_ears, .grey_stripe, .r_g_triangle").click(function(){
      $(this).toggleClass("index_down");
  });

  $(".help").click(function(){ //появляется подсказка с текстом
      $(".lala, .shadow").toggleClass("show");
  });


  $(".shield_img").click(function(){ //щит выходит вперед по индексу
     $(this).css("z-index","1");
  });
  $(".shield_img").dblclick(function(){ //показывается вы победили! переход на след лвл
      $(".done").toggleClass("show");
      clearInterval(int);
      });

  $("button").click(function(){ //обновить страницу уровня
      location.reload();
      });

  $(".eye2").click(function(){ //показывается вы победили! переход на след лвл
      $(".keep").toggleClass("show");
      });

  // var _Seconds = $('.time').text(),
  //   int;
  // int = setInterval(function() { // запускаем интервал
  //   if (_Seconds > 0) {
  //     _Seconds--; // вычитаем 1
  //     $('.time').text(_Seconds); // выводим получившееся значение в блок
  //   } else {
  //     clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
  //     $(".time_out").css("visibility","visible"); // показывается вы проиграли! перезапуск лвл
  //
  //   }
  // }, 1000);
});
