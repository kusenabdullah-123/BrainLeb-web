$(document).click(function (event) {
  $target = $(event.target);
  if ($target[0].nodeName == "BUTTON" && $target[0].className == "btn login") {
    $(".jumbotron .box-login").removeClass("hide");
    $(".jumbotron .box-login").addClass("show");
  } else if (
    !$target.closest(".jumbotron .box-login").length &&
    $(".jumbotron .box-login").is(":visible")
  ) {
    $(".jumbotron .box-login").removeClass("show");
    $(".jumbotron .box-login").addClass("hide");
  }
});

$("section.mapel main .cards.mapel").click((e) => {
  window.location.href = `${window.location.origin}/materi.html`;
});

$(".jumbotron .box-login form .button button").click((e) => {
  e.preventDefault();
  window.location.href = `${window.location.origin}/mapel.html`;
});
