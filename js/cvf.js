var time=0;
var ventana_alto = $(window).height();
var ventana_ancho = $(window).width();


$(document).on("click",".cvf_estadio",function(){
	$(".cvf_estadio_info_item").css("display","none");
	var cvf_num=$(this).attr("num");
	$("#cvf_ei_"+cvf_num).css("display","table");
	$(".cvf_estadio_info").fadeIn("normal");
	$(document).on("click","div", function(event){
		$(".cvf_estadio_info").fadeOut("slow");
		event.stopPropagation();
	});
});

$(document).on("click",".cvf_estadio_info", function(){
	$(this).fadeOut("slow");
});

$(document).on("click",".cvf_estadio_info_container", function(){
	$(".cvf_estadio_info").fadeOut("slow");
});




var contdown = function(){	
	var worldcup = Date.UTC(2015,01,17,19,45,0,0);
	var today = new Date().getTime();
	time=worldcup-today;

	var days_t=Math.floor(time / (1000 * 60 * 60 * 24));
	var hours_t=Math.floor((time-(days_t*1000*60*60*24)) / (1000 * 60 * 60));
	var minutes_t=Math.floor((time-(days_t*1000*60*60*24)-(hours_t*1000 * 60 * 60)) / (1000 * 60));

	$('#cvf_contador_dias').html(days_t);
	$('#cvf_contador_horas').html(hours_t);
	$('#cvf_contador_minutos').html(minutes_t);
	
	setInterval(function() {
	      contdown_update();
	}, 1000*60);
					
}

var contdown_update= function(){
	time=time-(1000*60);
					
	var days_t=Math.floor(time / (1000 * 60 * 60 * 24));
	var hours_t=Math.floor((time-(days_t*1000*60*60*24)) / (1000 * 60 * 60));
	var minutes_t=Math.floor((time-(days_t*1000*60*60*24)-(hours_t*1000 * 60 * 60)) / (1000 * 60));

	$('#cvf_contador_dias').html(days_t);
	$('#cvf_contador_horas').html(hours_t);
	$('#cvf_contador_minutos').html(minutes_t);
}

contdown();

$(".cvf_estadio_info").css({
	"width":ventana_ancho+"px",
	"height": ventana_alto+"px"
});

