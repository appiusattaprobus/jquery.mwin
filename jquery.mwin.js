/*
 * jQuery Modal Window Plugin 1.0
 * Nikita Ivanov <dr.ivanov@nxt.ru>
 * Copyright 2013
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
  $.fn.mwin = function( options ){

	var sets = $.extend( {
		open_button		: false,
		close_button	: false,
		time			: 800
	}, options);
  
	var $this = $(this);
	$this.css({
		'display' : 'none',
		'position': 'absolute',
		'z-index' : 99999
	});
	
	$( sets.open_button ).click(function(){
	
		$( "<div id='mwin_fadebody'></div>" ).appendTo( 'body' );
		
		var hdoc		= $(document).height();
		var hbody		= $( 'body' ).height();
		var $fadebody	= $( "#mwin_fadebody" );

		if( hbody < hdoc )
			$fadebody.css( 'height', hdoc );
		else
			$fadebody.css( 'height', hbody );
		
		$this.fadeIn( sets.time );
		
		
		return false;
	});
	
	$( sets.close_button ).click(function(){
	
		var $fadebody	= $( "#mwin_fadebody" );
		
		$this.fadeOut( sets.time, function(){
			$fadebody.remove();
		});
		
		return false;
	});
	
    return this;
  };
})(jQuery);
