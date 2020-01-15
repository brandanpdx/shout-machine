$(document).ready(function () {
  $("#formOne").submit(function(event) {
    var sentenceInput = $("input#sentence").val().toUpperCase() + "!!!";
    $(".sentenceResult").text(sentenceInput);
    event.preventDefault();
  })
})
