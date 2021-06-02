$(function(){
	   /*	Sticky Navigation
	------------------------------------------------------*/
   window.addEventListener("scroll", function(){
   		var header = document.querySelector("header");
   		 header.classList.toggle("sticky", window.scrollY > 0);
   });


	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------*/
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      	}, 800, 'swing', function () {
      	window.location.hash = target;
      	});

  	});

    /* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#nav .button a");	

	sections.waypoint( {

      handler: function(direction) {

		   	var active_section;

				active_section = $('.section' + this.element.id);

				if (direction === "up") active_section = active_section.prev();

				var active_link = $('#nav a[href="#' + active_section.attr("id") + '"]');			

				navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");

			}, 

		offset: '25%'

	});

});