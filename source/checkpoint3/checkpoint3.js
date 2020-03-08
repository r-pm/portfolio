// balloon exists
// counter = 0
// on balloon click, add 10 to score
// var score = 0
// $(document).ready(function(){
//   $(".balloon").click(function increment(){
//   function increment() {
//   score += 10;
//   $("#score").innerHTML = score;
//   };  
// }

$(document).ready(function(){
  $("#pink").click(function(){
    $("#pink").hide( function(){
      $("#pink").fadeIn(4800);
    });
  });
});

$(document).ready(function(){
  $("#orange").click(function(){
    $("#orange").hide("slow", function(){
      $("#orange").fadeIn(1400);
    });
  });
});

$(document).ready(function(){
  $("#blue").click(function(){
    $("#blue").hide("slow", function(){
      $("#blue").fadeIn(1400);
    });
  });
});

$(document).ready(function(){
  $("#yellow").click(function(){
    $("#yellow").hide("slow", function(){
      $("#yellow").fadeIn(1400);
    });
  });
});

$(document).ready(function(){
  $("#purple").click(function(){
    $("#purple").hide("slow", function(){
      $("#purple").fadeIn(1400);
    });
  });
});

$(document).ready(function(){
  $("#green").click(function(){
    $("#green").hide("slow", function(){
      $("#green").fadeIn(1400);
    });
  });
});

$(document).ready(function(){
  $("#cyan").click(function(){
    $("#cyan").hide("slow", function(){
      $("#cyan").fadeIn(1400);
    });
  });
});

$(document).ready(function(){
  $("#red").click(function(){
    $("#red").hide("slow", function(){
      $("#red").fadeIn(1400);
    });
  });
});

$('.balloon').click(function() {
  $('#score').html(function(i, val) { return val*1+10 });
})

// $(document).ready(function(){
//   $(".balloon").click(function(){
//     $(this).fadeOut();
//   });
// });

// $(".balloon").fadeOut(function(){
//   $(this).fadeIn(1400);
// });

console.log("please show")


// // onClick , delete balloon
// $("div.balloon").click(function(hide){
//   $("this").hide();
// });

// // balloon container <section> wont be subj to delete
// $("div.balloon").click(function(hide) {
//   hide.stopPropagation();
// });

// // onClick, add 10 to counter
// $("#div.balloon").click(increment);
// });

// function increment() {
//   score += 10;
//   $("#score")[0].innerHTML = score;
// };
// // make balloon exist again
// $("div.balloon")(function(){
//   $("div.balloon").show();
// });

// // jquery functions source https://www.w3schools.com/jquery/jquery_hide_show.asp