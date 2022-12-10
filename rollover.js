$(document).ready(function(){
    $("#faq_rollovers li").hover(function(){
        $(this).find("p.hidden").show();
    }, function(){
    $(this).find("p.hidden").hide();
    });
}); 