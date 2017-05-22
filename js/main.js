//even though all li's are selected, 'this' only applies style to the clicked element
//when comparing colors, colors must be rgb format

$('ul').on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click span to remove todo

$('ul').on("click", "span", function() {
  //alert('span');
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span> " + todoText + "</li>");
  }
});
