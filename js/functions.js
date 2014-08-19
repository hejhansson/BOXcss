
$(document).ready(function() {
	
	console.log("i love lamp");

});



/*
 * Confirm with users before opening
 * any mailto:-link through their default email client.
 */

$("a").click(function (e) {
    var link = $(this).attr("href").substring(0, 7);

    if(link == "mailto:") {
        var result = window.confirm("Do you want to open your email client?");

        if(result == false) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
});