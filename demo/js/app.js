document.addEventListener("DOMContentLoaded", function(event) { 
	var leftOffCanvas = document.getElementById('left-offcanvas-menu');
	var leftOffCanvasTrigger = document.getElementsByClassName('left-offcanvas-toggle')[0];

	leftOffCanvasTrigger.onclick = function(){
		if (this.className == "left-offcanvas-toggle") {
			leftOffCanvas.setAttribute('class', 'open');
			this.setAttribute('class', 'left-offcanvas-toggle open');
		}else{
			leftOffCanvas.setAttribute('class', '');
			this.setAttribute('class', 'left-offcanvas-toggle');
		};
	}
});