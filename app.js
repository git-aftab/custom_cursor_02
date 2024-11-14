const elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  val.addEventListener("mouseenter", function (dets) {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function (dets) {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (dets) => {
    val.childNodes[3].style.left = dets.x + "px";
    val.childNodes[3].style.top = dets.y + "px";
  });
});





// const elem_img = document.querySelector(".elem img")

// elem.addEventListener("mousemove", function(dets){
//     elem_img.style.opacity = 1
//     elem_img.style.left = dets.x + "px"
//     elem_img.style.top = dets.y + "px"
// })

// elem.addEventListener("mouseenter", function(dets){
//     elem_img.style.opacity = 1
// })

// elem.addEventListener("mouseleave", function(dets){
//     elem_img.style.opacity = 0
// })
