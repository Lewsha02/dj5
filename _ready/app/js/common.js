$(function() { 

$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".main-footer .toggle-mnu").click(function(){
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(".arrow-bottom").click(function(){
		$("html, body").animate({ scrollTop: $(".main-head").height() +120 }, "slow");
		return false;
	});

	$(".section_1 .section-content .info-item").equalHeights();
	$(".section_3 .section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".s2-item").equalHeights();
	$(".s2-item .img-wrap").equalHeights();

	$(".section_4").waypoint(function(){

		$(".section_4 .card").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("card-off").addClass(".card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});

	var waypointsvg = new Waypoint({

		element: $(".section_5"),
		handler: function(dir) {

			if (dir === "down") {

				$(".section_5 .tc-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tc-content").addClass("tc-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	$(".owl-carousel").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop: true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

	$(".section-head h2, .section-head p").animated("fadeInRight");

	$(".info-item-wrap").animated("zoomIn");

	$(".section_2").waypoint(function(){

		$(".s2-item-wrap").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.addClass("on");
			}, 200*index);
		});
	}, {
			offset : "30%"
		});

	$(".owl-carousel .slide").animated("rollIn");

	$(".section_8").waypoint(function(){

		$(".s8-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.addClass("on");
			}, 200*index);
		});
	}, {
			offset : "30%"
		});

	$(".section_8 .forms").animated("fadeInRight");
	$(".section_8 .section-head .p").animated("fadeInLeft");

	//E-mail Ajax Send
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".homesect .section-bottom .buttons").click(function (){
		$("#callback h4").html($(this).text());
	}).magnificPopup({
		type: "inline",
		mainClass: 'mfp-forms'
	});

});
