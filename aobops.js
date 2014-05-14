var navbarHeight;

var $resumeClUl;
var $resumeClLi;	

var resumeBegin;
var resumeEnd;
var eduBegin;
var jobBegin;
var awardBegin;
var skillBegin;

$(document).ready(function(){
	initializeVariables();

	setHeaderHeight();
	addWindowSizeChangeHandler();
	addSocialIconHoverHandler();
	addNavbarBtnHandler();
	addFindMoreBtnHandler();
	addResumeCatalogClickHandler();

	initializeResumePartBorderVar();
	addScrollHandler();
	initializeGoogleMap();
});

function initializeVariables(){
	navbarHeight=$('#navbar').height();

	$resumeClUl=$('#resume-catalog ul');
	$resumeClLi=$('#resume-catalog li');
}

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
	})
}

function scrollBtnClickHandler(evt){
	evt.preventDefault();
	animateScrollTo($(this.getAttribute('href')).offset().top);
}

function addWindowSizeChangeHandler(){
	$(window).resize(function(){
		setHeaderHeight();

		//since header height changed, the offset.top of resume have been affected
		initializeResumePartBorderVar();
		updateResumeCatalog();
	});
}

function addNavbarBtnHandler(){
	$('#nav-btn-list a, .navbar-brand').click(scrollBtnClickHandler)	
}

function addResumeCatalogClickHandler(){
	$('.cl-item a').click(scrollBtnClickHandler)
}

function addFindMoreBtnHandler(){
	var b=$('#find-more-button');
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

function initializeResumePartBorderVar(){	
	resumeBegin=$('#resume').offset().top;
	resumeEnd=$('#skill-section').offset().top+40-10;

	eduBegin=$('#education-section').offset().top-80;
	jobBegin=$('#job-section').offset().top-30;
	awardBegin=$('#award-section').offset().top-20;
	skillBegin=$('#skill-section').offset().top-20;
}

function updateResumeCatalog(){
	var ul=$resumeClUl;
	var lis=$resumeClLi;

	var p=$(window).scrollTop()+navbarHeight;
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
}

function addScrollHandler(){
	$('#resume-catalog').height($('#resume-content').height());

	$(window).scroll(function(e){
		updateResumeCatalog();
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

