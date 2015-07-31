$(window).on('load resize', function(){
  jQuery(document).ready(function(){
    jQuery('.file_slide').bxSlider({
      mode: 'fade',
      adaptiveHeight: 'true'

    });
    $('.bookmark').click(
      function(){
        $('.bookmark').toggleClass('active');
      }
    );
    $('.favorite').click(
      function(){
        $('.favorite').toggleClass('active');
      }
    );
    jQuery('#sortable-div').sortable({
      cursor : 'move',
      handle : '.handle'
    });
    jQuery('.task_lists').sortable({
      cursor : 'move'
    });
    jQuery('#nestable1').nestable();
    jQuery('#nestable2').nestable();
  });
});
