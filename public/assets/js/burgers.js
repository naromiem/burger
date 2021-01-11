$(function() {
    $(".submit").on("click", function(event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
          };
         
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
          location.reload();
        });
    });

    $(".updateBtn").on("click", function(event){
        
      const id = $(this).data("id");
      let newDevouredBurger = $(this).data('devouredstate');
      console.log(newDevouredBurger)
      
      switch(newDevouredBurger){
        case 1:
          newDevouredBurger = false
          break
        case 0:
          newDevouredBurger = true
          break
      }
        console.log(newDevouredBurger)
      const devourUpdated = {
        devoured: newDevouredBurger
      }

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourUpdated
      }).then(
        function() {
          console.log("burger devoured", newDevouredBurger);
          location.reload();
        });
    });
        
    $(".delete").on("click", function() {
      const id = $(this).data("id");
        
      $.ajax(`/api/burgers/${id}`, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        });
    });
 
});  