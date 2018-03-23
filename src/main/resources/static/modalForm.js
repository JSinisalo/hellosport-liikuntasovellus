
    let root = document.getElementById("root");

    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var addButton = document.getElementById('addButton');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // Get the button that posts
    var postButton = document.getElementById("post");
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let textBody = document.getElementById("textBody");
    let searchStart = document.getElementById("start_time");
    let searchEnd = document.getElementById("end_time");
    let gender = document.getElementById("gender");
    let sport = document.getElementById("sport");
    createBlogpostTable(root);
    // When the user clicks the button, open the modal 
    addButton.onclick = function() {
      modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    post.onclick = function() {
      modal.style.display = "none"
      fetch('http://localhost:8080/notifications', {

        method: 'POST', 
        body: JSON.stringify({

          title: title.value,
          textBody: textBody.value,
          authorName: author.value,
          searchStart: searchStart.value,
          searchEnd: searchEnd.value,
          gender: gender.value.split(' '),
          sport: sport.value.split(' ')
        }),
        headers: new Headers({ 'Content-Type': 'application/json'}) }).then((r) => { console.log(r); window.location.reload(false); }); 
        
      }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }

    function addElementFieldTo(to, title, e) {

      let element = document.createElement(e);
  
      let label = document.createElement("Label");
      label.innerHTML = title;     
  
      element.setAttribute("type", "text");
      element.setAttribute("value", title + " here");
      element.setAttribute("name", title);
      element.setAttribute("style", "width:200px");
  
      label.setAttribute("style", "font-weight:normal");
  
      to.appendChild(label);
      root.appendChild(document.createElement('br'));
      to.appendChild(element);
  
      return element;
  }
  
function createBlogpostTable(e) {

    let tbl  = document.createElement('table');

    tbl.style.border = '1px solid black';

    tbl.setAttribute('id','table1');

    let tr = tbl.insertRow();

    fetch('http://localhost:8080/notifications').then((response) => response.json()).then((arr) => {

        for(let j = 0; j < arr.length; j++) {

            let tr = tbl.insertRow();
    
            tr.insertCell().appendChild(document.createTextNode(arr[j].title));
            tr.insertCell().appendChild(document.createTextNode(arr[j].authorName));
            tr.insertCell().appendChild(document.createTextNode(arr[j].textBody));
            tr.insertCell().appendChild(document.createTextNode(arr[j].searchStart));
            tr.insertCell().appendChild(document.createTextNode(arr[j].searchEnd));
            tr.insertCell().appendChild(document.createTextNode(arr[j].gender));
            tr.insertCell().appendChild(document.createTextNode(arr[j].sport));
            let b = tr.insertCell().appendChild(document.createElement('button'));
            b.innerHTML = 'DELET';
            b.addEventListener('click',() => { fetch('http://localhost:8080/notifications/' + arr[j].id, { method: 'delete' }).then(() => { window.location.reload(false); }); });
        }
    });
  
      e.appendChild(tbl);
  }