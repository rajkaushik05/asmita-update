"use strict"

$(document).ready(function(){
    
    
	$("input").bind("input", function() {
    var fields = $(this).parents('form:eq(0),body').find('input');
        var index = fields.index( this );
        //alert(index);
        //alert(fields.val().length);
        //alert(fields.attr("maxlength"));
        	if ( index > -1 && fields.val().length >= parseInt(fields.attr("maxlength"),10)) {
            	fields.eq( index + 1 ).focus();
        	}
        	return false;
	});
});








