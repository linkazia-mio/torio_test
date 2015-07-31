$(window).on('load resize', function(){
  jQuery(document).ready(function(){
    var slider = jQuery('.file_slide').bxSlider({
      mode: 'fade',
      adaptiveHeight: 'true'
    });

    jQuery('#file_detail').on('show.bs.modal', function(){
        setTimeout(function(){
                slider.reloadSlider();}, 200
        )
    })

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
    jQuery('.task_replacement').sortable({
      cursor : 'move',
      handle : '.handle'
    });
    jQuery('.task_lists').sortable({
      cursor : 'move',
      connectWith : '.task_lists'
    });
  });
});
