var isOpen = false;

function toggleLightbox(content) {
	 
	if (isOpen) {
		$("#lightbox").css('visibility', 'hidden');
	}
	else {
		$("#lightbox").css('visibility', 'visible');
		setContent(content);
	}

	isOpen = !isOpen;

}

function setContent(whichContent) {
	console.log("called", whichContent); 
	$('.modal-content').css('display', 'none');
	var content = "#" + whichContent; 
	$(content).css('display', 'block');  
}