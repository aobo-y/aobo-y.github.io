$(document).ready(function(){
	setHeaderHeight();
	initializeSocialIconHover();
	initializeNavbarButton();
	initializeResumeScroll();
	initializeGoogleMap();
});

function setHeaderHeight(){
	var h=$(window).height()-$('#me').outerHeight();
	$('#header').height(h+'px');
}

function initializeNavbarButton(){
	$('#nav-btn-list a, .navbar-brand').click(function(){
		
		$('html, body').animate({
			scrollTop: $(this.getAttribute('href')).offset().top-50
		},300)
		return false;
	})	
}

function circleEleResize(ele,size){
	ele.stop().animate({
		overflow: 'none',
		width: size,
		height: size
	},'fast');	
}

function gradualIncreaSize(ele,size,direction,offset){
	offset=offset||0;
	var step=5-offset;
	circleEleResize(ele,size);
	if(size-step>50){
		if(direction==0||direction==2){
			var $prev=ele.prev();
			if($prev){
				gradualIncreaSize($prev,size-step,0,offset+1);
			}
		}
		if(direction==1||direction==2){
			var $next=ele.next();
			if($next){
				gradualIncreaSize($next,size-step,1,offset+1);
			}	
		}		
	}

}

function initializeSocialIconHover(){
	$('.circle-social-icon').hover(function(){
		$this=$(this);
		gradualIncreaSize($this,62,2);

	},function(){
		$this=$(this);
		circleEleResize($('.circle-social-icon'),50);		
	});
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

  $('#contact-right').height($('#contact').height());
}

