 $(document).ready(function(){
	 $("#angrybirds,#zootopia").click(function(){
		 
		var img=$(this).attr("src");
		
		$("body").append('<div id="curtain"></div>');
		
		$("body").append('<img src="'+img+'" id="light"/>');
		$("body").append('<div id="close"></div>');
		
		$("#light").animate({'opacity':'1'},1000);

		$("#close").click(function(){
			$("#light").remove();
			$("#curtain").remove();
			$("#close").remove();	
		});
	 });

	 $("#play").click(function(){
		$("#slider img:last-child").animate({'opacity':'0'},1000,function(){
		var img=$("#slider img:last-child").attr('src');
		$("#slider").prepend('<img src="'+img+'"/>');
			$("#slider img:last-child").remove();
			$("#play").click();
			});
			
	 });
	$("#play").click();
});
