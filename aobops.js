var navbarHeight;
var WEB_SERVICE='http://yangaobo.appspot.com';
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
	setResumeCatalogHeight();

	addWindowSizeChangeHandler();
	addSocialIconHoverHandler();
	addNavbarBtnHandler();
	addFindMoreBtnHandler();
	addResumeCatalogClickHandler();
	addContactFormSubmitBtnClickHandler();

	initializeResumePartBorderVar();
	addScrollHandler();
	initializeGoogleMap();
});


function addContactFormSubmitBtnClickHandler(){
	var contactForm=$('#contact form');
	contactForm.find('button').click(function(evt){
		evt.preventDefault();
		var hasError=false;
		var inputBox=contactForm.find('input, textarea').each(function(index){
			var $ele=$(this);

			if($ele.val().trim()===''){
				$ele.parent().removeClass('has-success').addClass('has-error');
				hasError=true;
				$ele.next('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();
			}
			else{
				$ele.parent().removeClass('has-error has-success');
				$ele.next('.form-control-feedback').hide();
			}
		});

		if(hasError){
			return;
		}

		$.ajax({
			url: WEB_SERVICE+'/send_message',
			type: 'post',
			data: contactForm.serialize(),
			success: function(data){
				if(data){
					inputBox.each(function(index){
						var $ele=$(this);
						$ele.parent().removeClass('has-error').addClass('has-success');
						$ele.next('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();
					});
					alert('Thank you for your message');
				}
				else{
					alert('Sever error: Send failed, please try it later');
				}
			},
			error: function(jqXHR, textStatus){
				alert(textStatus+': Send failed, please try it later');			
			}
		});
	});
}

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
}

function setResumeCatalogHeight(){
	$('#resume-catalog').height($('#resume-content').height());
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
	//200 is the height to bottom; 80 is the fixed height to top; last is the height of catalog including margin
	resumeEnd=$('#work').offset().top-200-80-$('#resume-catalog > ul').outerHeight(true);

	eduBegin=$('#education-section').offset().top-150;
	jobBegin=$('#job-section').offset().top-30;
	awardBegin=$('#award-section').offset().top-20;
	skillBegin=$('#skill-section').offset().top-20;
}

function updateResumeCatalog(p){
	var ul=$resumeClUl;
	var lis=$resumeClLi;
	var statusClass;

	switch (true){
		case (p<resumeBegin):
			statusClass='absolute-top'
			break;
		case (p<=resumeEnd):
			statusClass='fixed';
			break;
		default:
			statusClass='absolute-bottom';
			break;
	}

	if(!ul.hasClass(statusClass)){
		ul.removeClass();
		ul.addClass(statusClass);
	}

	if(p>=eduBegin&&p<=resumeEnd){
		var cli;
		var index;
		switch (true){
			case (p<jobBegin):
				index=0;
				break;
			case (p<awardBegin):
				index=1;
				break;
			case (p<skillBegin):
				index=2;
				break;
			default:
				index=3;
				break;
		}

		cli=lis.eq(index);

		if(!cli.hasClass('highlighted')){
			lis.removeClass('highlighted');
			cli.addClass('highlighted');
		}
	}

}

function addScrollHandler(){

	$(window).scroll(function(e){
		var topLine=$(window).scrollTop()+navbarHeight;

		updateResumeCatalog(topLine);
	});
}

function initializeGoogleMap() {
	var markerAdded=false;
	var myLatlng = new google.maps.LatLng(22.303325,114.186659);
	var mapOptions = {
		zoom: 8,
		center: myLatlng
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	$(window).scroll(function(e){

		var bottomLine=$(window).scrollTop()+$(window).height();
		var $mapCanvas=$('#map-canvas');
		if(bottomLine>=$mapCanvas.offset().top+400&&(!markerAdded)){
			var marker = new google.maps.Marker({
				position: myLatlng,
    			animation: google.maps.Animation.DROP,
				map: map,
				title: 'Spend most of time here'
			});
			google.maps.event.addListener(marker, 'mouseover', function(){
				if (marker.getAnimation() == null) {
					marker.setAnimation(google.maps.Animation.BOUNCE);
					setTimeout(function(){marker.setAnimation(null);}, 3500);
				}
			});
			markerAdded=true;
		}
	});

  	$('#contact-right').height($('#contact').height());
}

