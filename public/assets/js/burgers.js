$(function() {
    $(".change-devour").on("click", function(event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#newburger").val().trim(), devoured=0
          };
        
    
  
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("create new burger");
          location.reload();
        });
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault();

        const id = $(this).data("id");
        const newDevouredBurger = {
        devoured: 1
      };


      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredBurger
      }).then(
        function() {
          console.log("burger devoured", newDevour);
          location.reload();
        });
    });
    });
    
    $(".delete-burger").on("click", function(event) {
        event.preventDefault();

      const id = $(this).data("id");

      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        });
    });
 
  