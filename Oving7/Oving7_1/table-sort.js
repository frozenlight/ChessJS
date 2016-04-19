
function importArray (col1,col2,col3) {
	var mainArray = [[],[],[]];
	var arrayImport = document.getElementById("the-table-body").childNodes;
	var childLen = document.getElementById("the-table-body").childNodes.length;
	for (var i = 1; i < childLen;i +=2 ) {
		for (var h = 0; h < 3; h++) {
			mainArray[h].push(arrayImport[i].getElementsByTagName("td")[h].innerHTML);
		}
	}
	var arraySorted = [];
	for (var i = 0; i < mainArray[col1].length; i++) {
		arraySorted.push(String(mainArray[col1][i]))
	}
	arraySorted.sort();
	 
	for (var i = 0; i < (childLen-1); i += 2) {
		arrayImport[i+1].getElementsByTagName("td")[col1].innerHTML = arraySorted[(i==0)?(0):(i/2)];
		arrayImport[i+1].getElementsByTagName("td")[col2].innerHTML = mainArray[col2][mainArray[col1].indexOf(arraySorted[(i==0)?(0):(i/2)])];
		arrayImport[i+1].getElementsByTagName("td")[col3].innerHTML = mainArray[col3][mainArray[col1].indexOf(arraySorted[(i==0)?(0):(i/2)])];
	}
}

window.addEventListener("load", function() {
	document.getElementById("sort-button-1").addEventListener("click", function() {
		importArray(0,1,2)
	});
	document.getElementById("sort-button-2").addEventListener("click", function() {
		importArray(1,0,2)
	});
	document.getElementById("sort-button-3").addEventListener("click", function() {
		importArray(2,0,1)
	});
})