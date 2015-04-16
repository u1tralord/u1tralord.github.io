$( ".field" ).hover(
  function() {
      $(this).addClass("field-expanded");
  },
  function() {
    	if($( this ).find( ".text-area" ).val() == ""){
    	$(this).removeClass("field-expanded");
      }
  }
)

$( ".field" ).click(function() {
  $(this).addClass("field-expanded");
});

$( ".text-area" ).blur(
  function() {
    //$( this ).find( ".text-area" ).css( "background-color", "red" );
    var value = $( this ).val();
    if(value != "");
  }
);
