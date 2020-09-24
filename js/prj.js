var projects_template;

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	console.log(html);
	$('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){
console.log("doks ready1");
	//
	// compile all of our templates ready for use
	//
	var source   = $("#category-template").html();
	projects_template = Handlebars.compile(source);
	showTemplate(projects_template, projects_data);
	console.log("doks ready2");
});
