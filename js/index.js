// 滑動到最上方的效果---------------
$(window).scroll(function () {
    setScroll();
  });

  function setScroll() {
    var win = $(window),
      hWin = win.height(),
    //   wWin = win.width(),
      scroll = $(window).scrollTop();
  
    var bannerCont = $("#banner").offset().top;
    console.log(scroll);
    
    console.log(bannerCont);
    if (scroll > bannerCont) {
      $(".syt-nav").addClass("change-nav");
      $(".navbar-collapse").addClass("nav-no-bg");

      $(".navbar-toggler").css("outline","transparent");
    } else {
      $(".syt-nav").removeClass("change-nav");
      $(".navbar-collapse").removeClass("nav-no-bg");

      $(".navbar-toggler").css("outline","#223e72 2px solid");
    }
  
    // var serviceCont = $("#service-content").offset().top;
    // if (scroll > serviceCont - hWin * 0.8) {
    //   $("#service-content").addClass("show");
    //   if ($("#service-content").hasClass("show")) {
    //     for (var i = 1; i < 4; i++) {
    //       $(`#card-${i}`).addClass(`drop-animation-${i}`);
    //     }
    //   }
    //   // if ($("#contact").hasClass("show")) {
    //     // $(".top-btn").removeClass("not-show-btn");
    //     // $(".top-btn").addClass("show-btn");
    //   // }
    // } else {
    //   $("#service-content").removeClass("show");
    //   if (!$("#service-content").hasClass("show")) {
    //     for (var i = 1; i < 4; i++) {
    //       $(`#card-${i}`).removeClass(`drop-animation-${i}`);
    //     }
    //   }
    //   // if (!$("#contact").hasClass("show")) {
    //     // $(".top-btn").removeClass("show-btn");
    //     // $(".top-btn").addClass("not-show-btn");
    //   // }
    // }
  
    // var aboutCont = ($("#about").offset().top - 64) - scroll;
    // if(aboutCont<500){
    //   $("#about-content").addClass("about-original");
    //   $("#about-img").addClass("about-original");
    // }
    // else{
    //   $("#about-content").removeClass("about-original");
    //   $("#about-img").removeClass("about-original");
  
    // }
    
    // var contactCont = scroll - ($("#contact").offset().top - 100);
    // if(contactCont<-800){
    //   $(".top-btn").removeClass("show-btn");
    //   $(".top-btn").addClass("not-show-btn");
    // }
    //   else{
    //   $(".top-btn").removeClass("not-show-btn");
    //   $(".top-btn").addClass("show-btn");
    // }
  }
    
// const express = require('express');
// const app = express();
// // 加入這兩行
// const server = require('http').Server(app);
// const io = require('socket.io')(server);
 
// app.get('/', (req, res) => {
//     res.sendFile('C:/works/banner-sample-2/test.html');
// });
 
// // 當發生連線事件
// io.on('connection', (socket) => {
//     console.log('Hello!');  // 顯示 Hello!
 
//     // 當發生離線事件
//     socket.on('disconnect', () => {
//         console.log('Bye~');  // 顯示 bye~
//     });
// });
 
// // 注意，這邊的 server 原本是 app
// server.listen(3000, () => {
//     console.log("Server Started. http://localhost:3000");
// });
 