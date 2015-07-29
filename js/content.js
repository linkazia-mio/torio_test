$(window).on('load resize', function(){
  jQuery(document).ready(function(){
    jQuery('.file_slide').bxSlider({
      mode: 'fade',
      adaptiveHeight: 'true'

    });
    $(".bookmark").click(
      function(){
        $(".bookmark").toggleClass("active");
      }
    );
  });
});
$(".persons").nestable({
    listNodeName    : 'person_charge',
    itemIdAttribute : 'data-id'
});
