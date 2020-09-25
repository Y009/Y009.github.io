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

	source   = $("#modal-template").html();
	var modal_template = Handlebars.compile(source);

	showTemplate(projects_template, projects_data);

	function displayModal(event){
		 console.log("clicked image");
		 // get the index (position in the array)
		 // of the photo we clicked on
		 // "this" is the element that was clicked on
		 // data("id") gets the attribute data-id
		 // (which we set to the index of the photo in
		 // the array - @index)
		 var imageNumber = $(this).data("id");

		 // get the image out of the array using the image
		 // number and render it using the modal template
		 console.log(imageNumber);
		 console.log(projects_data.projects[imageNumber].images[0]);
		 var html    = modal_template(projects_data.projects[imageNumber]);
		 // put the modal template in the DOM
		 $('#modal-container').html(html);
		 //
		 // // show the modal
		 $("#imageModal").modal('show');
	}

	// display the modal when you click on a thumbnail
	$('.thumbnail').click(displayModal);


});
