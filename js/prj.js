var projects_template;

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	var source   = $("#category-template").html();
	projects_template = Handlebars.compile(source);
	showTemplate(projects_template, projects_data);

});
