
  $(document).ready(function(){
  $('.pic').click(function(){

    var cat = $(this).attr('src');
    var pics = $(this).attr('alt');

  $(this).attr('src', pics);
  $(this).attr('alt', cat);

})
})
