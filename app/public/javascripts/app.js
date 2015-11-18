
function getData() {
  var xhttpResponse = new XMLHttpRequest();
  xhttpResponse.open("GET", "/jsonRead", true);
  xhttpResponse.onreadystatechange = function() {
    if (xhttpResponse.readyState === 4 && xhttpResponse.status === 200) {
      var parsed = JSON.parse(xhttpResponse.responseText);
      var messages = parsed.messages;
      var message = messages[messages.length-1];
      var newElement = document.createElement('li');
        newElement.id = message.id;
        newElement.innerHTML = message.contents;
      var feed = document.getElementById("feed");
        feed.insertBefore(newElement, feed.firstChild);
      var newDelButton = addButton(message.id, "destroy", 'x');
        newDelButton.addEventListener("click", function() { destroyData(message.id); });
        newElement.appendChild(newDelButton);
      var newEditButton = addButton(message.id,"update",'edit');
        newElement.appendChild(newEditButton);
        newEditButton.addEventListener("click", function() { updateData(message.id, message.contents); });
    }
  };
  xhttpResponse.send();
}

function postData() {
  var post = document.getElementById('message').value;
  var xhttp = new XMLHttpRequest();
    xhttp.open("POST","/jsonCreate" , true);
    xhttp.send(post);
  getData();
}

function destroyData(id) {
  var xhttpDelete = new XMLHttpRequest();
    xhttpDelete.open("POST","/jsonDestroy" , true);
    xhttpDelete.send(id);
  removeElementById(id);
}

function updateData(id, contents) {
  var edit = prompt("Edited comment:", contents);
  if (edit !== null) {
    var xhttpUpdate = new XMLHttpRequest();
      xhttpUpdate.open("POST","/jsonUpdate" , true);
      var js = JSON.stringify({message: [id, edit]});
      xhttpUpdate.send(js);
    var message = document.getElementById(id);
      message.innerHTML = edit;
    var newDelButton = addButton(message.id, "destroy", 'x');
      newDelButton.addEventListener("click", function() { destroyData(id); });
      message.appendChild(newDelButton);
    var newEditButton = addButton(message.id,"update",'edit');
      newEditButton.addEventListener("click", function() { updateData(id, edit); });
      message.appendChild(newEditButton);
  }
}

function removeElementById(id) {
    var elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
    return false;
}

function addCreateListener() {
  document.getElementById('create').addEventListener("click", function() { postData(); });
}

function addDestroyListeners(){
  classList = document.getElementsByClassName("destroy");
  for(i=0;i<classList.length;i++) {
    classList[i].addEventListener("click", function() { destroyData(this.id); }, false);
  }
}

function addUpdateListeners(){
  classList = document.getElementsByClassName("update");
  for(i=0;i<classList.length;i++) {
    classList[i].addEventListener("click", function() { updateData(this.id, this.innerText); }, false);
  }
}

function addButton(id, class_name, text) {
  var button = document.createElement('button');
  button.id = id;
  button.className = class_name;
  button.innerHTML = text;
  return button;
}
