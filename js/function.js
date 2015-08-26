$(window).on('resize', function(){});

window.onload=function(){

  $(document).ready(function(){

    //global_menu 非表示
    $('.global_menu_btn').click(function (event) {
      jQuery('.global_menu').toggle();
      jQuery('.global_menu').toggleClass("size_none");
      var w = $(window).width(); //ウィンドウの幅
      var w2= $('.global_menu').width(); //他要素の幅
      $('header').css('width', w-w2); //可変部分の幅を適用
      $('.header_inner').css('width', w-w2); //可変部分の幅を適用
      var w = $(window).width(); //ウィンドウの高さ
      var w1= $('.page_menu').width(); //他要素の高さ
      var w2= $('.global_menu').width(); //他要素の高さ
      $('.detail').css('width', w-w1-w2-2); //可変部分の高さを適用
      $('#masonry').css('width', w-w1-w2-2); //可変部分の高さを適用
      jQuery('#masonry').masonry({
        itemSelector: '.grid',
        transitionDuration: 0,
        columnWidth: 250,
        isFitWidth: true
      });
    });

    //Task Box
    $('.alart_task p').click(function (event) {
      $('.task_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.task_box.popover_big').toggle();
    });
    $('.task_box').click(function (event) {
      jQuery('.task_box').show();
      event.stopPropagation();
    });
    $('.mine_btn').click(function (event) {
      jQuery('.task_active_lists.mine').show();
      jQuery('.task_active_lists.requeste').hide();
      $(this).addClass("active");
      $('.requeste_btn').removeClass("active");
    });
    $('.requeste_btn').click(function (event) {
      jQuery('.task_active_lists.requeste').show();
      jQuery('.task_active_lists.mine').hide();
      $(this).addClass("active");
      $('.mine_btn').removeClass("active");
    });
    //Activity
    $('.activity p').click(function (event) {
      $('.activity_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.activity_box').toggle();
    });
    $('.activity_box').click(function (event) {
      jQuery('.activity_box').show();
      event.stopPropagation();
    });
    $('.activity_mine_btn').click(function (event) {
      jQuery('.activity_mine').show();
      jQuery('.activity_all').hide();
      $(this).addClass("active");
      $('.all_btn').removeClass("active");
    });
    $('.all_btn').click(function (event) {
      jQuery('.activity_all').show();
      jQuery('.activity_mine').hide();
      $(this).addClass("active");
      $('.activity_mine_btn').removeClass("active");
    });
    //Account
    $('.me').click(function (event) {
      $('.account').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.account').toggle();
    });
    $('.account').click(function (event) {
      jQuery('.account').show();
      event.stopPropagation();
    });
    //Check box
    $('.config .check').click(function (event) {
      $('.check_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.check_box').toggle();
    });
    //Website Box
    $('.website').click(function (event) {
      $('.detail_website_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.detail_website_box').toggle();
    });
    $('.detail_website_box').click(function (event) {
      jQuery('.detail_website_box').show();
      event.stopPropagation();
    });
    //Option box
    $('.config .option').click(function (event) {
      $('.option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.option_box').toggle();
    });
    //Add page
    $('.page_menu_footer p').click(function (event) {
      $('.add_page').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.add_page').toggle();
    });
    //Detail_option_box
    $('.detail .option').click(function (event) {
      $('.detail_option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.detail_option_box').toggle();
    });
    //Detail_option_box
    $('.detail .check').click(function (event) {
      $('.detail_check_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.detail_check_box').toggle();
    });
    //task_add_list_member
    $('.task_add_list_btn').click(function (event) {
      $('.task_add_list_member').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.task_add_list_member').toggle();
    });
    //Task_add_time
    $('#made_1 .time_create').click(function (event) {
      $('#made_1 .task_add_time').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('#made_1 .task_add_time').toggle();
    });
    //Task_add_time
    $('#made_2 .time_create').click(function (event) {
      $('#made_2 .task_add_time').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('#made_2 .task_add_time').toggle();
    });
    //Task_add_time
    $('#made_3 .time_create').click(function (event) {
      $('#made_3 .task_add_time').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('#made_3 .task_add_time').toggle();
    });
    //Task Add Member
    $('#made_1 .task_member').click(function (event) {
      $('#made_1 .task_add_member').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('#made_1 .task_add_member').toggle();
    });
    //Task Add Member
    $('#made_2 .task_member').click(function (event) {
      $('#made_2 .task_add_member').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('#made_2 .task_add_member').toggle();
    });
    //Task Add Member
    $('#made_3 .task_member').click(function (event) {
      $('#made_3 .task_add_member').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('#made_3 .task_add_member').toggle();
    });
    //Task Option
    $('.modal-header .option').click(function (event) {
      $('.modal_option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.modal_option_box').toggle();
    });
    //Limit_add_time
    $('.limlt').click(function (event) {
      $('.limit_add_time').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.limit_add_time').toggle();
    });
    $('.limit_add_time').click(function (event) {
      jQuery('.limit_add_time').show();
      event.stopPropagation();
    });
    //Task_add_requester
    $('.requester input').click(function (event) {
      $('.task_add_requester').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.task_add_requester').toggle();
    });
    //Task_add_worker
    $('.worker input').click(function (event) {
      $('.task_add_worker').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.task_add_worker').toggle();
    });
    //Nnote_detail_option_box
    $('#note_1 .note_option').click(function (event) {
      $('#note_1 .note_detail_option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('#note_1 .note_detail_option_box').toggle();
    });
    //Note_detail_option_box
    $('#note_2 .note_option').click(function (event) {
      $('#note_2 .note_detail_option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('#note_2 .note_detail_option_box').toggle();
    });
    //comment_count
    $('#note_1 .comment_count').click(function (event) {
      $('#note_1 .note_comment').toggle();
      $('#note_1 .note_edit_inner_comment').toggleClass('no_border');
    });
    //comment_count
    $('.item .option').click(function (event) {
      $('.item_option_box').toggle( 'fade', '', 100 );
    });
    //configuration_btn_show
    $('.cancellation .configuration_btn_show .configuration_open').click(function (event) {
      $('.cancellation .configuration_btn.delete').toggle();
      $('.configuration_open').hide();
      $('.configuration_close').show();
    });
    //configuration_btn_show
    $('.configuration_btn_show .configuration_close').click(function (event) {
      $('.cancellation .configuration_btn.delete').toggle();
      $('.configuration_open').show();
      $('.configuration_close').hide();
    });
    //change
    $('.change').click(function (event) {
      $('.input_box_pass').removeClass('disabled');
      event.stopPropagation();
    });
    //cancellation_first
    $('#cancellation_first .delete').click(function (event) {
      $('#cancellation_second').show();
      $('#cancellation_first').hide();
      event.stopPropagation();
    });
    //cancellation_second
    $('#cancellation_second .delete').click(function (event) {
      $('#cancellation_finish').show();
      $('#cancellation_second').hide();
      event.stopPropagation();
    });
    $('#cancellation_second .cancel').click(function (event) {
      $('#cancellation_first').show();
      $('#cancellation_second').hide();
      event.stopPropagation();
    });

    //カレンダー
    $(function() {
        $('#made_1 .calendar').datepicker({
    		showOtherMonths: true,
    		minDate: 0,
    		onSelect: function(dateText, inst) {
    			$('#made_1 #date').val(dateText);
    		}
        });
    });
    $(function() {
        $('#made_2 .calendar').datepicker({
    		showOtherMonths: true,
    		minDate: 0,
    		onSelect: function(dateText, inst) {
    			$('#made_2 #date').val(dateText);
    		}
        });
    });
    $(function() {
        $('#made_3 .calendar').datepicker({
    		showOtherMonths: true,
    		minDate: 0,
    		onSelect: function(dateText, inst) {
    			$('#made_3 #date').val(dateText);
    		}
        });
    });
    $(function() {
        $('.limit_add_time .calendar').datepicker({
    		showOtherMonths: true,
    		minDate: 0,
    		onSelect: function(dateText, inst) {
    			$('#limlt_date').val(dateText);
    		}
        });
    });


    (function( factory ) {
      	if ( typeof define === 'function' && define.amd ) {
      		// AMD. Register as an anonymous module.
      		define([ '../datepicker' ], factory );
      	} else {
      		// Browser globals
      		factory( jQuery.datepicker );
      	}
      }(function( datepicker ) {
      datepicker.regional['ja'] = {
      	closeText: '閉じる',
      	prevText: '',
      	nextText: '',
      	currentText: '今日',
      	monthNames: ['1月','2月','3月','4月','5月','6月',
      	'7月','8月','9月','10月','11月','12月'],
      	monthNamesShort: ['1月','2月','3月','4月','5月','6月',
      	'7月','8月','9月','10月','11月','12月'],
      	dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
      	dayNamesShort: ['日','月','火','水','木','金','土'],
      	dayNamesMin: ['日','月','火','水','木','金','土'],
      	weekHeader: '週',
      	dateFormat: 'yy/mm/dd',
      	firstDay: 0,
      	isRTL: false,
      	showMonthAfterYear: true,
      	yearSuffix: '年'};
        datepicker.setDefaults(datepicker.regional['ja']);
        return datepicker.regional['ja'];
      }));

      //ノートタイトル書き換え
      $('.note_title').click(function() {
        $('.note_title').css( 'display', 'none');
        $('#title_edit')
          .val( $( '.note_title').text())
          .css( 'display', '')
          .focus();
      });
        $('#title_edit').blur(function() {
        $('#title_edit').css( 'display', 'none');
        $('.note_title')
        .text($('#title_edit').val())
        .css( 'display', '');
      });

      $('.editable').click(function (event) {
        jQuery('.start').hide();
        event.stopPropagation();
      });

      //ファイルスライド
      jQuery('#file_detail').on('show.bs.modal', function(){
        setTimeout(function(){slider.reloadSlider();},200);
      });

      $('.slide').click(function (event) {
        jQuery('#file_detail').show();
        var slider = jQuery('.file_slide').bxSlider({
          mode: 'fade',
          speed: 0,
          adaptiveHeight : true,
          adaptiveHeightSpeed: 0,
          preloadImages: 'visible',
          autoReload: true
        });
      });
      $('#file_detail').click(function (event) {
        jQuery('#file_detail').hide();
        event.stopPropagation();
      });
      $('.file_detail_close').click(function (event) {
        jQuery('#file_detail').hide();
        event.stopPropagation();
      });
      $('.file_detail_inner').click(function (event) {
        jQuery('#file_detail').show();
        event.stopPropagation();
      });

      //タスク入れ替え
      jQuery('.task_replacement').sortable({
        cursor : 'move',
        handle : '.handle',
        placeholder: 'placeholder'
      });
      jQuery('.task_lists').sortable({
        cursor : 'move',
        connectWith : '.task_lists',
        placeholder: 'placeholder_inner'
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


  });

  //グループを追加の削除ボタン
  $('#group_member_1 .delete').click(function() {
    $('#group_member_1').hide();
  });
  $('#group_member_2 .delete').click(function() {
    $('#group_member_2').hide();
  });

  //トグルスイッチ
  $('.toggle_btn').click(function (event) {
    $('.off .circle').animate({'left': '+=30px'}, 'fast');
    $('.on .circle').animate({'left': '-=30px'}, 'fast');
    $(this).toggleClass("off");
    $(this).toggleClass("on");
    $('.input_dot_contents p .on').toggle();
    $('.input_dot_contents p .off').toggle();
  });

  //グループ、メンバー追加hover
  $('.add').click(function() {
    $(this).find('.balloon_box').hide();
  });
  $('.add').hover(
    function () {
      $(this).find('.balloon_box').show();
    },
    function () {
      $(this).find('.balloon_box').hide();
    }
  );

  //閲覧者hover
  $('.browse_count').click(function() {
    $(this).find('.balloon_box').hide();
  });
  $('.browse_count').hover(
    function () {
      $(this).find('.balloon_box').show();
    },
    function () {
      $(this).find('.balloon_box').hide();
    }
  );

  //クリッカブル
  $('.item').click(function (event) {
    $(this).toggleClass('selected');
  });
  //クリッカブル
  $('.global_menu_inner li a').click(function (event) {
    $(this).toggleClass('selected');
  });

  //リストを作成するボタン表示
  $('.task_create_inner input').click(function (event) {
    jQuery('.btn_add_task_create').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('.btn_add_task_create').hide();
  });

  //タスク入力部分
  $('.task_add_list_member button').click(function (event) {
    $(this).toggleClass('checked');
  });
  $('.task_add_member button').click(function (event) {
    $(this).toggleClass('checked');
  });
  $('.task_add_requester button').click(function (event) {
    $(this).toggleClass('checked');
  });
  $('.task_add_worker button').click(function (event) {
    $(this).toggleClass('checked');
  });


  $('#made_1.made .task_input').click(function (event) {
    jQuery('#made_1 .task_button').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('#made_1 .task_button').hide();
  });

  $('#made_2.made').click(function (event) {
    jQuery('#made_2 .task_button').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('#made_2 .task_button').hide();
  });

  $('#made_3.made').click(function (event) {
    jQuery('#made_3 .task_button').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('#made_3 .task_button').hide();
  });


  $('.information textarea').each(function(){
    autosize(this);
  });

  $(function(){
       function adjust(){
            var h = $(window).height(); //ウィンドウの高さ
            $('.main').css('height', h); //可変部分の高さを適用
       };
       function adjust(){
            var h = $(window).height(); //ウィンドウの高さ
            var h1= $('.page_menu .config').height(); //他要素の高さ
            var h2= $('.page_menu .page_menu_footer').height(); //他要素の高さ
            $('.page_menu_inner').css('height', h-h1-h2-60); //可変部分の高さを適用
       }
       adjust();
       $(window).on('resize', function(){
            adjust();
       })
  });

  $(function(){
        function adjust(){
             var h = $(window).height(); //ウィンドウの高さ
             var h4= $('.profile_title').height(); //他要素の高さ
             $('.profile').css('height', h-h4); //可変部分の高さを適用
        }
       adjust();
       $(window).on('resize', function(){
            adjust();
       })
  });

  $(function(){
        function adjust(){
             var h = $(window).height(); //ウィンドウの高さ
             var h5= $('.sponsor').height(); //他要素の高さ
             $('.global_menu_inner').css('height', h-h5); //可変部分の高さを適用
        }
       adjust();
       $(window).on('resize', function(){
            adjust();
       })
  });

  $(function(){
        function adjust(){
             var h = $(window).height(); //ウィンドウの高さ
             $('.detail').css('height', h-50); //可変部分の高さを適用
        }
       adjust();
       $(window).on('resize', function(){
            adjust();
       })
  });

  $(function(){
      function adjust(){
           var w = $(window).width(); //ウィンドウの幅
           var w1= $('.page_menu').width(); //他要素の幅
           var w2= $('.global_menu').width(); //他要素の幅
           $('.detail').css('width', w-w1-w2-2); //可変部分の幅を適用
      }
     adjust();
     $(window).on('resize', function(){
        adjust();
     })
  });

  $(function(){
       function adjust(){
            var h = $(window).height(); //ウィンドウの高さ
            $('.viewers_list').css('max-height', h/2); //可変部分の高さを適用
       }
       adjust();
       $(window).on('resize', function(){
            adjust();
       })
  });

  $(function(){
      function adjust(){
           var w = $(window).width(); //ウィンドウの幅
           var w2= $('.global_menu').width(); //他要素の幅
           $('header').css('width', w-w2); //可変部分の幅を適用
           $('.header_inner').css('width', w-w2); //可変部分の幅を適用
      }
     adjust();
     $(window).on('resize', function(){
        adjust();
     })
  });


  var popover = $('.popover');
  var popoverBig = $('.popover_big');
  //エリア外をクリックしたらpopoverを消す
  $(document).click(function() {
    popover.hide();
    popoverBig.hide();
  });

  $(function(){
    $('#add_member,#add_group,#viewers_box').on('shown.bs.modal', function () {
      $('#myInput').focus()
    });
  });


  //画面幅移動
  jQuery(function() {
      jQuery( '.global_menu' ).resizable({
          minWidth: 140,
          maxWidth: 300
      });
      jQuery( '.page_menu' ).resizable({
          minWidth: 320,
          maxWidth: 400
      });
      jQuery( '.detail' ).resizable({
      });
  });

  //File可変グリッド
  jQuery(function(){
      jQuery('#masonry').masonry({
          itemSelector: '.grid',
          transitionDuration: 0,
          columnWidth: 250,
          isFitWidth: true
      });
  });
  $(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
      timer = setTimeout(function() {
          console.log('resized');
          jQuery('#masonry').masonry({
              itemSelector: '.grid',
              transitionDuration: 0,
              columnWidth: 250,
              isFitWidth: true
          });
      }, 200);
  });

  //タスクドーナツグラフ 緑
  var Dougnut_data = [
    {
      value: 60,
      color:'#3A87BC'
    },
    {
      value: 40,
      color: '#e0f2f2'
    }
  ];
  //タスクドーナツグラフ 黄色
  var Dougnut_data_yellow = [
    {
      value: 40,
      color:'#feb22e'
    },
    {
      value: 60,
      color: '#fff4e0'
    }
  ];
  //タスクドーナツグラフ 赤
  var Dougnut_data_red = [
    {
      value: 10,
      color:'#ed6d44'
    },
    {
      value: 90,
      color: '#fbebea'
    }
  ];

  var options = {
    segmentStrokeColor: "rgba(255, 255, 255, 0.0)",
    percentageInnerCutout : 80,
    animationSteps : 20,
    animationEasing: 'easeOutQuart',
    showTooltips: false,
  //   //String - A legend template
  //   legendTemplate : '<% for (var i=0; i<segments.length; i++){ %><p style='color:<%=segments[i].fillColor%>'><%= Math.ceil(segments[i].value / total * 1000) / 10 %>%</p><% } %>',
  //   onAnimationComplete: function() {
  //     $('.number').html(this.generateLegend()).fadeIn();
  //  }
  }

  var myDoughnut = new Chart(document.getElementById('task_graph_green').
  getContext('2d')).Doughnut(Dougnut_data,options);
  var myDoughnut = new Chart(document.getElementById('task_graph_red').
  getContext('2d')).Doughnut(Dougnut_data_red,options);
  var myDoughnut = new Chart(document.getElementById('task_graph_yellow').
  getContext('2d')).Doughnut(Dougnut_data_yellow,options);

};

$(function(){
	actCustomScrollbar();
});

function actCustomScrollbar(){
     $('.global_menu_inner').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('.page_menu_inner').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('.profile').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('.detail').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('.viewers_list').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('.task_active_lists').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('.activity_lists').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('#note_viewers_box .modal-body').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('#note_like_box .modal-body').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('#viewers_box .modal-body').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('#file_detail').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
}
