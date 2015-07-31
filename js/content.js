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
    jQuery('#sortable-div').sortable();
    jQuery('#nestable1').nestable();
    jQuery('#nestable2').nestable();
  });
});
