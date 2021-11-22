var paragraph=document.querySelectorAll("p.card-text");

document.querySelector("a.daily").addEventListener("click",function(){
  for (var i = 0; i < paragraph.length; i++) {
      document.querySelectorAll("p.card-text")[i].innerHTML="Yesterday-2hrs"
  }
});


document.querySelector("a.weekly").addEventListener("click",function(){
  for (var i = 0; i < paragraph.length; i++) {
      document.querySelectorAll("p.card-text")[i].innerHTML="Last Week-32hrs"
  }
})
document.querySelector("a.monthly").addEventListener("click",function(){
  for (var i = 0; i < paragraph.length; i++) {
      document.querySelectorAll("p.card-text")[i].innerHTML="Last Month-19hrs"
  }
})
