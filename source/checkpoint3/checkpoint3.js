// balloon exists
// counter = 0
var score = 0

// onClick , delete balloon
$("div.balloon").click(function(hide){
  $("this").hide();
});

// balloon container <section> wont be subj to delete
$("div.balloon").click(function(hide) {
  hide.stopPropagation();
});

// onClick, add 10 to counter
$("#div.balloon").click(increment);
});

function increment() {
  score += 10;
  $("#score")[0].innerHTML = score;
};
// make balloon exist again
$("div.balloon")(function(){
  $("div.balloon").show();
});

// jquery functions source https://www.w3schools.com/jquery/jquery_hide_show.asp