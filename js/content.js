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
    $('#nestable').nestable({
    });
    $('#task_1').click(function() {
      $('#task_1').css( 'display', 'none');
      $('#task_edit_1')
          .val( $( '#task_1').text())
          .css( 'display', '')
          .focus();
    });
    $('#task_edit_1').blur(function() {
        $('#task_edit_1').css( 'display', 'none');
        $('#task_1')
          .text($('#task_edit_1').val())
          .css( 'display', '');
    });
    $('#task_2').click(function() {
      $('#task_2').css( 'display', 'none');
      $('#task_edit_2')
          .val( $( '#task_2').text())
          .css( 'display', '')
          .focus();
    });
    $('#task_edit_2').blur(function() {
        $('#task_edit_2').css( 'display', 'none');
        $('#task_2')
          .text($('#task_edit_2').val())
          .css( 'display', '');
    });
    $('.favorite').click(
      function(){
        $('.favorite').toggleClass('active');
      }
    );
    $('#nestable').nestable();
  });
});
