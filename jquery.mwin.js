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
		open_button	: false,
		close_button	: "#mwin_img_close",
		time		: 100
	}, options);
  
	var $this = $(this);
	
	/*
	 * Clicking on open button
	 */
	$( sets.open_button ).click(function(){
	
		$( "<div id='mwin_fadebody'></div>" ).appendTo( 'body' );
		$( "<div id='mwin_close'><img id='mwin_img_close' src='img/close-black.png' /></div>" ).appendTo( $this );
		
		var hdoc	= $(document).height();
		var hbody	= $( 'body' ).height();
		var $fadebody	= $( "#mwin_fadebody" );

		if( hbody < hdoc )
			$fadebody.css( 'height', hdoc );
		else
			$fadebody.css( 'height', hbody );
			
		margins();
		
		$this.fadeIn( sets.time, function(){
			
		});
		
		return false;
	});
	
	/*
	 * Function execute when change size of window
	 */
	$(window).resize( margins );
	
	/*
	 * Function create margins from rims of window 
	 */
	function margins(){
		$this.css({
			'top' : 50 + '%',
			'left': 50 + '%',
			'margin-top'  : -$this.height() /2.,
			'margin-left' : -$this.width() /2.,
		});
	};
	
	/*
	 * Clicking on close button
	 */
	$( document ).on("click", sets.close_button , function(){
	
		var $fadebody	= $( "#mwin_fadebody" );
		
		$this.fadeOut( sets.time, function(){
			$fadebody.remove();
			$("#mwin_close").remove();
		});
		
		return false;
	});
	
    return this;
  };
  
})(jQuery);
