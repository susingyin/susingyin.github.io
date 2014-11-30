var images = ["img/portfolio/project_0.jpg", "img/portfolio/project_1.jpg", "img/portfolio/project_2.jpg", "img/portfolio/project_3a.jpg" , "img/portfolio/project_3b.jpg", "img/portfolio/project_4.jpg"];
var currentPhoto = 0;

function changePhoto(whichNum) {
	var img = document.getElementById('mainPhoto');
	img.setAttribute('src', images[whichNum]);
	currentPhoto = whichNum;
}
function backImage() {
	currentPhoto = currentPhoto - 1;
	if(currentPhoto=== -1){
		currentPhoto = 0;
	}
	var img = document.getElementById('mainPhoto');
	img.setAttribute('src', images[currentPhoto]);	
}

function nextImage() {
	currentPhoto++;
	if(currentPhoto===images.length){
		currentPhoto = 0;
	}
	var img = document.getElementById('mainPhoto');
	img.setAttribute('src', images[currentPhoto]);
}