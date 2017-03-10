function loadImgById(id) {
	document.getElementById("imgShow").src="image/"+id+".png";
	document.getElementById("imgShow").name=id;
}


function loadNextImage () {
	var idCurrentImg = document.getElementById("imgShow").name;	
	var idNextImg=parseInt(idCurrentImg)+1;
	if(idNextImg<=5) {
		loadImgById(idNextImg);
	}
	if(idNextImg>5) {
		loadImgById(1);
	}
}

function loadPriveousImage () {
	var idCurrentImg = document.getElementById("imgShow").name;	
	var idPreviousImg=parseInt(idCurrentImg)-1;
	if(idPreviousImg >0) {
		loadImgById(idPreviousImg);
	}
	if(idPreviousImg<=0) {
		loadImgById(5);
	}
}