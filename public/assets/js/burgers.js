$(function() {
    $(".change-devour").on("click", function(event) {
      const id = $(this).data("id");
      const newDevour = $(this).data("newdevour");
  
      var newDevouredBurger = {
        devour: newDevour
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredBurger
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurger = {
        name: $("#burger").val().trim(),
        devour: $("[name=devour]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("create new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      const id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  