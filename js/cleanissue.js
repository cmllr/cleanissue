var hidden = [];
function Run() {
	if (document.title.indexOf("Issue") != -1 && document.location.hostname=="github.com") {
		var count =$(".timeline-comment-header-text").length-1;
		//Delete the plain text +1
		$("p:contains(+1)").each(function(){
			var text = $(this).html();
			console.log(text);
			if (text === "+1"){
				$(this).parent().parent().parent().parent().parent().hide();
				hidden.push($(this));
			}
		});		
		//Delete the Image-Thumb
		$("p>img").each(function(){
			var parent = $(this).parent();
			var text = parent.html();
			if (text.trim() === '<img class="emoji" title=":+1:" alt=":+1:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" height="20" width="20" align="absmiddle">'){
				$(this).parent().parent().parent().parent().parent().parent().hide();
				hidden.push(parent);
			}
		});
		var oldText = $(".flex-table-item:contains(comments)").text();
		var newText = $(".flex-table-item:contains(comments)").text().replace(count,(count-hidden.length));
		//Update comment title
		$(".flex-table-item:contains(comments)").text(newText);
		//Add to title			
		$("#partial-discussion-header .flex-table .flex-table-item:last").append("· <span>"+hidden.length+" 'plus one' comments removed </span><span class=\"mega-octicon octicon-thumbsup\"></span>");	
	}
}
$(document).ready(function(){
	Run();
});
