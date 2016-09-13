$(document).ready(function(){
	$(".text").hide();
	$(".yeRen img").mouseenter(function(){
		$(".text").fadeIn("slow");
		$(".text").html("TmacL偷懒了，我正想找他来K一顿呢！");
	});
	$(".yeRen img").mouseleave(function(){
		$(".text").fadeOut("slow");
	});
	$(".yeRen img").click(function(){
		$(".text").html("是不是偷懒了就想安抚！安抚！那也不能使劲点啊！！");
	});
	$(".yeRen img").click(function(){
		$(".text").html("不要再点了，好不不好！！服了你们了");
	});
	$(".yeRen img").click(function(){
		$(".text").html("请收下留情啊！没事多去“畅所欲言”，说出你想说的或者想对我说的！哈哈！");
	});
});
