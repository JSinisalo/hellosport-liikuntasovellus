window.addEventListener('load', () => {

    let root = document.getElementById("root");

    document.body.appendChild(document.createElement('br'));
    let title = addElementFieldTo(document.body, "title", "input");
    document.body.appendChild(document.createElement('br'));
    let author = addElementFieldTo(document.body, "author", "input");
    document.body.appendChild(document.createElement('br'));
    let textBody = addElementFieldTo(document.body, "textBody", "textarea");
    document.body.appendChild(document.createElement('br'));
    let searchStart = addElementFieldTo(document.body, "start time", "input");
    document.body.appendChild(document.createElement('br'));
    let searchEnd = addElementFieldTo(document.body, "end time", "input");
    document.body.appendChild(document.createElement('br'));
    let gender = addElementFieldTo(document.body, "gender", "input");
    document.body.appendChild(document.createElement('br'));
    let sport = addElementFieldTo(document.body, "sport", "input");
    document.body.appendChild(document.createElement('br'));

    textBody.style.height = "500px";
    
    let b = document.body.appendChild(document.createElement('button'));
    b.innerHTML = 'POST';
    b.addEventListener('click',() => {

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
            headers: new Headers({ 'Content-Type': 'application/json'}) })
            .then((r) => { console.log(r); window.location.reload(false); }); 
    });
    
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));

    createBlogpostTable(document.body);
});

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
    document.body.appendChild(document.createElement('br'));
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