    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var addButton = document.getElementById('addButton');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // Get the button that posts
    var postButton = document.getElementById("post");

    // When the user clicks the button, open the modal 
    addButton.onclick = function() {
      modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    post.onclick = function() {

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }

    function ready() {

    }
    window.onload = ready;