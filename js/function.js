$(window).on('resize', function(){});

window.onload=function(){

  //タスク入力部分
  $('#made_1.task_input').click(function () {
    $(this).css('padding_bottom','15px');
    jQuery('.task_button').show();
    event.stopPropagation();
  });
  $('#made_1.made').click(function () {
    jQuery('#made_1 .task_button').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('#made_1 .task_button').hide();
  });
  $('#made_1 .task_input').each(function(){
    autosize(this);
  });
  $('#made_1 .task_add_member button').click(function () {
    $(this).toggleClass('checked');
  });
  $('#made_1 .task_add_list_member button').click(function () {
    $(this).toggleClass('checked');
  });
  $('#made_1.task_input').click(function () {
    $(this).css('padding_bottom','15px');
    jQuery('.task_button').show();
    event.stopPropagation();
  });
  $('#made_1 .made').click(function () {
    jQuery('#made_1 .task_button').show();
    event.stopPropagation();
  });


  $('#made_2.task_input').click(function () {
    $(this).css('padding_bottom','15px');
    jQuery('.task_button').show();
    event.stopPropagation();
  });
  $('#made_2.made').click(function () {
    jQuery('#made_2 .task_button').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('#made_2 .task_button').hide();
  });
  $('#made_2 .task_input').each(function(){
    autosize(this);
  });
  $('#made_2 .task_add_member button').click(function () {
    $(this).toggleClass('checked');
  });
  $('#made_2 .task_add_list_member button').click(function () {
    $(this).toggleClass('checked');
  });
  $('#made_2.task_input').click(function () {
    $(this).css('padding_bottom','15px');
    jQuery('.task_button').show();
    event.stopPropagation();
  });
  $('#made_2 .made').click(function () {
    jQuery('#made_2 .task_button').show();
    event.stopPropagation();
  });


  $('#made_3.task_input').click(function () {
    $(this).css('padding_bottom','15px');
    jQuery('.task_button').show();
    event.stopPropagation();
  });
  $('#made_3.made').click(function () {
    jQuery('#made_3 .task_button').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('#made_3 .task_button').hide();
  });
  $('#made_3 .task_input').each(function(){
    autosize(this);
  });
  $('#made_3 .task_add_member button').click(function () {
    $(this).toggleClass('checked');
  });
  $('#made_3 .task_add_list_member button').click(function () {
    $(this).toggleClass('checked');
  });
  $('#made_3.task_input').click(function () {
    $(this).css('padding_bottom','15px');
    jQuery('.task_button').show();
    event.stopPropagation();
  });
  $('#made_3 .made').click(function () {
    jQuery('#made_3 .task_button').show();
    event.stopPropagation();
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


  //エリア外をクリックしたらpopoverを消す
  $(document).click(function() {
    $('.popover').hide();
  });


  $(document).ready(function(){
    //Activity
    $(".activity p").click(function () {
      $(".activity_box").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member').hide();
    });
    //Check box
    $(".config .check").click(function () {
      $(".check_box").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.activity_box,.option_box,.detail_option_box,.detail_check_box,#task_add_time_1,.task_add_list_member,.task_add_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Option box
    $(".config .option").click(function () {
      $(".option_box").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.activity_box,.check_box,.detail_option_box,.detail_check_box,#task_add_time_1,.task_add_list_member,.task_add_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Add page
    $(".page_menu_footer p").click(function () {
      $(".add_page").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.detail_option_box,.detail_check_box,#task_add_time_1,.task_add_list_member,.task_add_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Detail_option_box
    $(".detail .option").click(function () {
      $(".detail_option_box").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_check_box,#task_add_time_1,.task_add_list_member,.task_add_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Detail_option_box
    $(".detail .check").click(function () {
      $(".detail_check_box").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_option_box,#task_add_time_1,.task_add_list_member,.task_add_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //task_add_list_member
    $(".task_add_list_btn").click(function () {
      $(".task_add_list_member").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_option_box,#task_add_time_1,.task_add_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    $('.task_add_list_member').click(function () {
      jQuery('.task_button').show();
      event.stopPropagation();
    });
    //Task_add_time
    $("#made_1 .time_create").click(function () {
      $("#made_1 .task_add_time").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_option_box,.task_add_list_member,.task_add_member,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task_add_time
    $("#made_2 .time_create").click(function () {
      $("#made_2 .task_add_time").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_option_box,.task_add_list_member,.task_add_member,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task_add_time
    $("#made_3 .time_create").click(function () {
      $("#made_3 .task_add_time").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.option_box,.activity_box,.check_box,.add_page,.detail_option_box,.task_add_list_member,.task_add_member,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task Add Member
    $("#made_1 .task_member").click(function () {
      $("#made_1 .task_add_member").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task Add Member
    $("#made_2 .task_member").click(function () {
      $("#made_2 .task_add_member").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task Add Member
    $("#made_3 .task_member").click(function () {
      $("#made_3 .task_add_member").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,#task_add_time_1,#task_add_time_2,#task_add_time_3').hide();
    });
    //Task Option
    $(".modal-header .option").click(function () {
      $(".modal_option_box").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member').hide();
    });
    //Limit_add_time
    $(".limlt").click(function () {
      $(".limit_add_time").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member,.task_add_requester,.task_add_worker').hide();
    });
    $('.limit_add_time').click(function () {
      jQuery('.limit_add_time').show();
      event.stopPropagation();
    });
    //Task_add_requester
    $(".requester input").click(function () {
      $(".task_add_requester").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member,.task_add_worker,.limit_add_time').hide();
    });
    //Task_add_worker
    $(".worker input").click(function () {
      $(".task_add_worker").toggle( 'fade', '', 100 );
      event.stopPropagation();
      $('.add_page,.check_box,.option_box,.detail_option_box,.detail_check_box,.task_add_list_member,.task_add_member,.task_add_requester,.limit_add_time').hide();
    });
  });

  $(function(){
    $('#add_member,#add_group,#viewers_box').on('shown.bs.modal', function () {
      $('#myInput').focus()
    });
  });


  //global_menu 非表示
  $(document).ready(function(){
    $(".global_menu_btn").click(function () {
      jQuery( '.global_menu' ).toggle();
    });
  });


  //File可変グリッド
  $(function(){
      $('#masonry').masonry({
          itemSelector: '.grid',
          transitionDuration: 0,
          columnWidth: 250,
          isFitWidth: true
      });
  });
  jQuery(window).resize(function(){
    $('#masonry').masonry({
        itemSelector: '.grid',
        transitionDuration: 0
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
      jQuery( '.detail' ).resizable({
        minWidth: 450
      });
  });

  //タスクドーナツグラフ 緑
  var Dougnut_data = [
    {
      value: 60,
      color:"#3A87BC"
    },
    {
      value: 40,
      color: "#e0f2f2"
    }
  ];
  //タスクドーナツグラフ 黄色
  var Dougnut_data_yellow = [
    {
      value: 40,
      color:"#feb22e"
    },
    {
      value: 60,
      color: "#fff4e0"
    }
  ];
  //タスクドーナツグラフ 赤
  var Dougnut_data_red = [
    {
      value: 10,
      color:"#ed6d44"
    },
    {
      value: 90,
      color: "#fbebea"
    }
  ];

  var options = {
    percentageInnerCutout : 70,
    animationSteps : 20,
    animationEasing: "easeOutQuart",
    showTooltips: false,
  //   //String - A legend template
  //   legendTemplate : '<% for (var i=0; i<segments.length; i++){ %><p style="color:<%=segments[i].fillColor%>"><%= Math.ceil(segments[i].value / total * 1000) / 10 %>%</p><% } %>',
  //   onAnimationComplete: function() {
  //     $(".number").html(this.generateLegend()).fadeIn();
  //  }
  }

  var myDoughnut = new Chart(document.getElementById("task_graph_green").
  getContext("2d")).Doughnut(Dougnut_data,options);
  var myDoughnut = new Chart(document.getElementById("task_graph_red").
  getContext("2d")).Doughnut(Dougnut_data_red,options);
  var myDoughnut = new Chart(document.getElementById("task_graph_yellow").
  getContext("2d")).Doughnut(Dougnut_data_yellow,options);


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
      handle : '.handle'
    });
    jQuery('.task_lists').sortable({
      cursor : 'move',
      connectWith : '.task_lists',
      placeholder: 'placeholder'
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
     $(".global_menu_inner").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $(".page_menu_inner").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $(".detail .file").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $(".detail .task").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $(".detail .note").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $(".viewers_list").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
}
