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
  var editor = new MediumEditor('.editable', {
      buttonLabels: 'fontawesome',
      buttons: [
          'bold',
      //    'italic',
      //    'underline',
          'header1',
          'anchor',
      //    'header2',
          'quote',
      //    'superscript',
      //    'subscript',
      //    'strikethrough',
          'unorderedlist',
          'orderedlist',
          'pre',
      //    'justifyLeft',
      //    'justifyFull',
      //    'justifyCenter',
      //    'justifyRight',
      //    'image',
      //    'indent',
      //    'outdent',
      //    'removeFormat'
      ],
      anchorInputPlaceholder: 'Type a link',
      //diffLeft: 25,
      //diffTop: 10,
      firstHeader: 'h1',
      secondHeader: 'h2',
      delay: 1000,
      targetBlank: true,
      paste: {
          cleanPastedHTML: true,
          cleanAttrs: ['style', 'dir'],
          cleanTags: ['label', 'meta']
      }
  });
  $(function () {
    $('.editable').mediumInsert({
      editor: editor,
      addons: {
        images: {
          uploadScript: null,
          deleteScript: null,
          styles: {
            slideshow: {
              label: '<span class="fa fa-play"></span>',
              added: function ($el) {
                  $el
                  .data('cycle-center-vert', true)
                  .cycle({
                      slides: 'figure'
                  });
              },
              removed: function ($el) {
                  $el.cycle('destroy');
              }
            }
          },
          actions: null
        }
      }
    });
  });
});
