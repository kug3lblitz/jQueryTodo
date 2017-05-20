//even though all li's are selected, 'this' only applies style to the clicked element
//when comparing colors, colors must be rgb format

$('li').click(function() {
  if($(this).css('color') === "rgb(128, 128, 128)"){
      //testing
      //alert("it's gray");
      $(this).css({
        color: 'black',
        textDecoration: 'initial'
      })
  }
  else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});
