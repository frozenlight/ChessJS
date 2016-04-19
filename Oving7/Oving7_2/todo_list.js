function addToList() {
	var item = document.getElementById("addItem").value;
	var appendTo = document.getElementById("listItems").innerHTML;
	if (item != "") {
		document.getElementById("addItem").value = "";
		checkBox = document.createElement("input");
		checkBox.type = "checkbox";
		text = document.createElement("p");
		text.innerHTML = item;
		listElement = document.createElement("div");
		listElement.appendChild(checkBox);
		listElement.appendChild(text);
		list.appendChild(listElement);
	}
}
function reAddToList() {
	tempArray = [];
	for (var i = 0; i < list.children.length; i++) {
		if (!list.children[i].children[0].checked) {
			tempArray.push(list.children[i].children[1].innerHTML);
		}
	}
	list.innerHTML = ""
	for (var i = 0; i < tempArray.length; i++) {
		checkBox = document.createElement("input");
		checkBox.type = "checkbox";
		text = document.createElement("p");
		text.innerHTML = tempArray[i];
		listElement = document.createElement("div");
		listElement.appendChild(checkBox);
		listElement.appendChild(text);
		list.appendChild(listElement);
	}
}

window.addEventListener("load", function() {
	document.getElementById("addButton").addEventListener("click", function() {
		addToList()
	})
	document.getElementById("clear").addEventListener("click", function() {
		reAddToList()
	})
	list = document.getElementById("listItems");
})