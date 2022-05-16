//Add a button to remove from list
var listItem = document.getElementsByTagName('LI');
var i;
for (i = 0; i < listItem.length; i++) {
    var spanElement = document.createElement("span");
    var button = document.createTextNode("-");
    spanElement.className = "remove";
    spanElement.appendChild(button);
    listItem[i].appendChild(spanElement);
}

//Remove list item if remove button is clicked
var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
        var removeChosen = this.parentElement;
        removeChosen.style.display = "none";
    }
}

//Click on list item to cross it out
var chosen = document.querySelector('ul');
chosen.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.className = 'list-group-item checked';
    }
}, false);

// Add new list item
function addList() {
    var item = document.createElement("LI");
    var input = document.getElementById("add").value;
    var a = document.createTextNode(input);
    item.className = "list-group-item";
    item.appendChild(a);
    if (input === '') {
        document.getElementById("error").innerHTML = 'Please enter something!'
    } else {
        document.getElementById("new").appendChild(item);
        document.getElementById("error").innerHTML = "";
    }
    document.getElementById("add").value = "";

    //Add the remove button to the new list item
    var listItem = document.getElementsByTagName('LI');
    var i;
    for (i = 0; i < listItem.length; i++) {
        var spanElement = document.createElement("span");
        var button = document.createTextNode("-");
        spanElement.className = "remove";
        spanElement.appendChild(button);
        listItem[i].appendChild(spanElement);
    }

    //Remove item if button is clicked
    var remove = document.getElementsByClassName("remove");
    var i;
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            var removeChosen = this.parentElement;
            removeChosen.style.display = "none";
        }
    }
}