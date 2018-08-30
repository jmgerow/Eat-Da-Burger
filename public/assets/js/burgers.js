$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");

    var newDevour = $(this).data("newdevour");
    console.log('newDevour', newDevour)

    var newEatenState = {
      devoured: newDevour
    };
    console.log('newEatenState', newEatenState)

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function () {
        console.log("changed devoured to", newDevour);

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $("#new-burger").val().trim()
    };


    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("added new burger");

        location.reload();
      }
    );
  });

});
