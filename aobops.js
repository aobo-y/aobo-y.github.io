var navbarHeight;

$(document).ready(function(){
	navbarHeight=$('#navbar').height();

	setHeaderHeight();
	addWindowSizeChangeHandler();
	addSocialIconHoverHandler();
	addNavbarBtnHandler();
	addFindMoreBtnHandler();
	addResumeCatalogClickHandler();
	initializeResumeScroll();
	initializeGoogleMap();
});

function setHeaderHeight(){
	var h=$(window).height();
	if(h>600){
		h-=$('#me').outerHeight()
	}
	$('#header').outerHeight(h);

	var hc=$('#header-content');
	hc.css({
		'margin-top':'-'+ hc.height()/2 + 'px'
	})
}

function animateScrollTo(destination){
	$('html, body').animate({
		scrollTop: destination-navbarHeight
	},300)
}

function scrollBtnClickHandler(evt){
	evt.preventDefault();
	animateScrollTo($(this.getAttribute('href')).offset().top);
}

function addWindowSizeChangeHandler(){
	$(window).resize(setHeaderHeight);
}

function addNavbarBtnHandler(){
	$('#nav-btn-list a, .navbar-brand').click(scrollBtnClickHandler)	
}

function addResumeCatalogClickHandler(){
	$('.cl-item a').click(scrollBtnClickHandler)
}

function addFindMoreBtnHandler(){
	var b=$('#find-more-button');
	b.on('mouseover mouseout touchstart touchend', function(){
		b.toggleClass('hover');
	})
	b.click(scrollBtnClickHandler);
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
	var step=4-offset;
	circleEleResize(ele,size);
	if(size-step>50){
		if(direction==0||direction==2){
			var $prev=ele.prev();
			if($prev){
				gradualIncreaSize($prev,size-step,0);
			}
		}
		if(direction==1||direction==2){
			var $next=ele.next();
			if($next){
				gradualIncreaSize($next,size-step,1);
			}	
		}		
	}

}

function addSocialIconHoverHandler(){
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
	var resumeBegin=$('#resume').offset().top;
	var resumeEnd=$('#skill-section').offset().top+40-10;

	var eduBegin=$('#education-section').offset().top-80;
	var jobBegin=$('#job-section').offset().top-30;
	var awardBegin=$('#award-section').offset().top-20;
	var skillBegin=$('#skill-section').offset().top-20;
	
	var ul=$('#resume-catalog ul');
	var lis=$('#resume-catalog li');	

	$(window).scroll(function(e){
		var p=$(window).scrollTop()+50;
		if(p>=resumeBegin&&p<=resumeEnd){
			
			if(!ul.hasClass('fixed')){
				ul.removeClass();
				ul.addClass('fixed');
			}
		}
		else if(p<resumeBegin){
			if(!ul.hasClass('absolute-top')){
				ul.removeClass();
				ul.addClass('absolute-top');
			}			
		}
		else{
			if(!ul.hasClass('absolute-bottom')){
				ul.removeClass();
				ul.addClass('absolute-bottom');
			}			
		}

		if(p>=eduBegin&&p<=resumeEnd+250){
			if(p<jobBegin){
				var cli=$('#cl-item-edu');
				if(!cli.hasClass('highlighted')){
					lis.removeClass('highlighted');
					cli.addClass('highlighted');
				}
			}
			else if(p<awardBegin){
				var cli=$('#cl-item-job');
				if(!cli.hasClass('highlighted')){
					lis.removeClass('highlighted');
					cli.addClass('highlighted');
				}
			}
			else if(p<skillBegin){
				var cli=$('#cl-item-award');
				if(!cli.hasClass('highlighted')){
					lis.removeClass('highlighted');
					cli.addClass('highlighted');
				}
			}
			else{
				var cli=$('#cl-item-skill');
				if(!cli.hasClass('highlighted')){
					lis.removeClass('highlighted');
					cli.addClass('highlighted');
				}
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

