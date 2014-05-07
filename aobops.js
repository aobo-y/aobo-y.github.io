$(document).ready(function(){
	setHeaderHeight();
	initializeNavbarButton();
	initializeResumeScroll();
	initializeGoogleMap();
});

function setHeaderHeight(){
	var h=$(window).height()-$('#me').outerHeight();
	$('#header').height(h+'px');
}

function initializeNavbarButton(){
	$("#nav-btn-list a, .navbar-brand").click(function(){
		
		$("html, body").animate({
			scrollTop: $(this.getAttribute("href")).offset().top-50
		},300)
		return false;
	})	
}

function initializeResumeScroll(){
	$('#resume-catalog').height($('#resume-content').height());
	var resumeBegin=$('#resume').offset().top-50;
	var resumeEnd=$('#work').offset().top-375;
	$(window).scroll(function(e){
		var p=$(window).scrollTop();
		if(p>=resumeBegin&&p<=resumeEnd){
			var ul=$('#resume-catalog ul');
			if(!ul.hasClass('fixed')){
				ul.removeClass();
				ul.addClass('fixed');
			}
		}
		else if(p<resumeBegin){
			var ul=$('#resume-catalog ul');
			if(!ul.hasClass('absolute-top')){
				ul.removeClass();
				ul.addClass('absolute-top');
			}			
		}
		else{
			var ul=$('#resume-catalog ul');
			if(!ul.hasClass('absolute-bottom')){
				ul.removeClass();
				ul.addClass('absolute-bottom');
			}			
		}
	});
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

