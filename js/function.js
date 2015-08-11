$(window).on('resize', function(){});

window.onload=function(){

  $(document).ready(function(){
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

      $('.editable').click(function () {
        jQuery('.start').hide();
        event.stopPropagation();
      });

  });

  //グループを追加の削除ボタン
  $('#group_member_1 .delete').click(function() {
    $('#group_member_1').hide();
  });
  $('#group_member_2 .delete').click(function() {
    $('#group_member_2').hide();
  });

  //トグルスイッチ
  $('.toggle_btn').click(function () {
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
  $('.item').click(function () {
    $(this).toggleClass('selected');
  });
  //クリッカブル
  $('.global_menu_inner li a').click(function () {
    $(this).toggleClass('selected');
  });

  //リストを作成するボタン表示
  $('.task_create').click(function () {
    jQuery('.btn_add_task_create').toggle();
  });

  //タスク入力部分
  $('.task_add_list_member button').click(function () {
    $(this).toggleClass('checked');
  });
  $('.task_add_member button').click(function () {
    $(this).toggleClass('checked');
  });
  $('.task_add_requester button').click(function () {
    $(this).toggleClass('checked');
  });
  $('.task_add_worker button').click(function () {
    $(this).toggleClass('checked');
  });


  $('#made_1.made .task_input').click(function () {
    jQuery('#made_1 .task_button').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('#made_1 .task_button').hide();
  });

  $('#made_2.made').click(function () {
    jQuery('#made_2 .task_button').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('#made_2 .task_button').hide();
  });

  $('#made_3.made').click(function () {
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
            $('.page_menu_inner').css('height', h-h1-h2-53); //可変部分の高さを適用
       }
       adjust();
       $(window).on('resize', function(){
            adjust();
       })
  });

  $(function(){
        function adjust(){
             var h = $(window).height(); //ウィンドウの高さ
             $('.global_menu_inner').css('height', h-53); //可変部分の高さを適用
        }
       adjust();
       $(window).on('resize', function(){
            adjust();
       })
  });

  $(function(){
        function adjust(){
             var h = $(window).height(); //ウィンドウの高さ
             $('.detail .file').css('height', h-53); //可変部分の高さを適用
        }
       adjust();
       $(window).on('resize', function(){
            adjust();
       })
  });

  $(function(){
        function adjust(){
             var h = $(window).height(); //ウィンドウの高さ
             $('.detail .task').css('height', h-53); //可変部分の高さを適用
        }
       adjust();
       $(window).on('resize', function(){
            adjust();
       })
  });

  $(function(){
        function adjust(){
             var h = $(window).height(); //ウィンドウの高さ
             $('.detail .note').css('height', h-53); //可変部分の高さを適用
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


  var popover = $('.popover');
  var popoverBig = $('.popover_big');
  //エリア外をクリックしたらpopoverを消す
  $(document).click(function() {
    popover.hide();
    popoverBig.hide();
    $('.btn_add_task_create').hide();
  });


  $(document).ready(function(){
    //Task Box
    $('.alart_task p').click(function () {
      $('.task_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.task_box.popover_big').toggle();
    });
    $('.task_box').click(function () {
      jQuery('.task_box').show();
      event.stopPropagation();
    });
    $('.mine_btn').click(function () {
      jQuery('.active_lists.mine').show();
      jQuery('.active_lists.requeste').hide();
      $(this).addClass("active");
      $('.requeste_btn').removeClass("active");
    });
    $('.requeste_btn').click(function () {
      jQuery('.active_lists.requeste').show();
      jQuery('.active_lists.mine').hide();
      $(this).addClass("active");
      $('.mine_btn').removeClass("active");
    });
    //Activity
    $('.activity p').click(function () {
      $('.activity_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.activity_box.popover').toggle();
    });
    //Check box
    $('.config .check').click(function () {
      $('.check_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.check_box').toggle();
    });
    //Website Box
    $('.website').click(function () {
      $('.detail_website_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.detail_website_box').toggle();
    });
    $('.detail_website_box').click(function () {
      jQuery('.detail_website_box').show();
      event.stopPropagation();
    });
    //Option box
    $('.config .option').click(function () {
      $('.option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.option_box').toggle();
    });
    //Add page
    $('.page_menu_footer p').click(function () {
      $('.add_page').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.add_page').toggle();
    });
    //Detail_option_box
    $('.detail .option').click(function () {
      $('.detail_option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.detail_option_box').toggle();
    });
    //Detail_option_box
    $('.detail .check').click(function () {
      $('.detail_check_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      popover.hide();
      popoverBig.hide();
      $('.detail_check_box').toggle();
    });
    //task_add_list_member
    $('.task_add_list_btn').click(function () {
      $('.task_add_list_member').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_option_box,#task_add_time_1,.task_add_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task_add_time
    $('#made_1 .time_create').click(function () {
      $('#made_1 .task_add_time').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_option_box,.task_add_list_member,.task_add_member,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task_add_time
    $('#made_2 .time_create').click(function () {
      $('#made_2 .task_add_time').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_option_box,.task_add_list_member,.task_add_member,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task_add_time
    $('#made_3 .time_create').click(function () {
      $('#made_3 .task_add_time').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_option_box,.task_add_list_member,.task_add_member,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task Add Member
    $('#made_1 .task_member').click(function () {
      $('#made_1 .task_add_member').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task Add Member
    $('#made_2 .task_member').click(function () {
      $('#made_2 .task_add_member').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task Add Member
    $('#made_3 .task_member').click(function () {
      $('#made_3 .task_add_member').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task Option
    $('.modal-header .option').click(function () {
      $('.modal_option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member').hide();
    });
    //Limit_add_time
    $('.limlt').click(function () {
      $('.limit_add_time').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member,.task_add_requester,.task_add_worker').hide();
    });
    $('.limit_add_time').click(function () {
      jQuery('.limit_add_time').show();
      event.stopPropagation();
    });
    //Task_add_requester
    $('.requester input').click(function () {
      $('.task_add_requester').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member,.task_add_worker,.limit_add_time').hide();
    });
    //Task_add_worker
    $('.worker input').click(function () {
      $('.task_add_worker').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member,.task_add_requester,.limit_add_time').hide();
    });
    //Nnote_detail_option_box
    $('#note_1 .note_option').click(function () {
      $('#note_1 .note_detail_option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member,.task_add_requester,.limit_add_time,#note_2 .note_detail_option_box').hide();
    });
    //Note_detail_option_box
    $('#note_2 .note_option').click(function () {
      $('#note_2 .note_detail_option_box').toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member,.task_add_requester,.limit_add_time,#note_1 .note_detail_option_box').hide();
    });
    //comment_count
    $('#note_1 .comment_count').click(function () {
      $('#note_1 .note_comment').toggle();
    });
    //comment_count
    $('.item .option').click(function () {
      $('.item_option_box').toggle( 'fade', '', 100 );
    });


  });

  $(function(){
    $('#add_member,#add_group,#viewers_box').on('shown.bs.modal', function () {
      $('#myInput').focus()
    });
  });


  //global_menu 非表示
  $(document).ready(function(){
    $('.global_menu_btn').click(function () {
      jQuery( '.global_menu' ).toggle();
      jQuery('#masonry').masonry();
    });
  });

  //画面幅移動
  jQuery(function() {
      jQuery( '.global_menu' ).resizable({
          minWidth: 200,
          maxWidth: 400
      });
      jQuery( '.page_menu' ).resizable({
          minWidth: 310,
          maxWidth: 600
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
  jQuery(window).resize(function(){
    jQuery('#masonry').masonry({
        itemSelector: '.grid',
        transitionDuration: 0,
        columnWidth: 250,
        isFitWidth: true
    });
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
     $('.detail .file').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('.detail .task').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $('.detail .note').mCustomScrollbar({
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
     $('.active_lists').mCustomScrollbar({
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
     $('#viewers_box .modal-body').mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
}
