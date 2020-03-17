const dataURL = "https://api.myjson.com/bins/jcmhn";

const inputArea = ["var1", "var2", "var3", "var4", "var5", "var6", "speach"];

function getInputsValues () {
	let obj = {};

	inputArea.forEach(function(field) {
		obj[field] = $("input[name=" + field + "]")[0].value
	});

	// var1: $("input[name=var1]")[0].value,
	return obj;

}

function operationButton () {
	$.getJSON(dataURL, operationData);
	$("form").toggle();
	$("#button").click(function(){
		document.location.reload(true);
	});
	buttonChange();
}
// Option
function buttonChange () {
	$("#button").html('Давай по-новой');
}

function operationData(data) {
	let message = "";

	let inputValue = getInputsValues();

	data["text"].forEach(function(item) {
		for (key in inputValue) {
			item = item.replace("{" + key + "}", inputValue[key]);

		}
		
		message += item + "<br>";
	});
	
	$("div#result").html(message);

	
}

function init() {
	$(".btn-primary").click(operationButton);
}

$(document).ready(init);