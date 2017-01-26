// $(function(){
//   var param = {
//     changedEl:"select",
//     scrollArrows: true
//   }
//     cuSel(param);
//     console.log();
// });
$(function () {
	// console.log($("select"));
	$("select").change(function (){
		$("select option:selected").each(function () {
			$charName = $(this).val();
			$actor = $(this).attr("actor");
			
//			console.log($charName);
//			console.log($actor);
			$(".img-char").attr("src", $charName);
			$(".actor").text($actor);
		});
	});
	
})
