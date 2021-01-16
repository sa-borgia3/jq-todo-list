//hide task before adding new
$(".not-completed .task , .completed .task").addClass("hide");

var input = $("input");

input.keyup(function (e) {
  if (e.keyCode == 13 && e.target.value != "") {
    var task = $('<div class="task"/>').text(e.target.value);

    var del = $('<i class="fas fa-trash"/>').click(function () {
      var p = $(this).parent();
      p.fadeOut(function () {
        p.remove();
      });
    });

    var check = $('<i class="fas fa-check"/>').click(function () {
      var checked = $(this).parent();
      $(".completed").append(checked);
    });

    task.append(del, check);

    //delete single task});
    $(".not-completed").append(task);
    input.val("");
  }
});
