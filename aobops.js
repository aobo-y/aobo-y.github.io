$(document).ready(function(){
	initializeScrollAnimation();
	initializeGoogleMap();
});


function initializeScrollAnimation(){
	$("#nav-btn-list a, .navbar-brand").click(function(){
		
		$("html, body").animate({
			scrollTop: $(this.getAttribute("href")).offset().top-20
		},300)
		return false;
	})	
}


function initializeGoogleMap() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(22.303325,114.186659)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  $("#contact-right").height($("#contact").height());
}

