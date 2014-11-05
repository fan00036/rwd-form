
document.addEventListener("DOMContentLoaded", init);

function init(){
	//startup script
	 $( "#slider" ).slider({
      range: "min",
      value: 1000,
      min: 100,
      max: 2000,
      slide: function( event, ui ) {
        $( "#price" ).val( "$" + ui.value );
      }
    });
    $( "#price" ).val( "$" + $( "#slider" ).slider( "value" ) );
}