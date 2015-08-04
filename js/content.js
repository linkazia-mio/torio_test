$(document).ready(function(){

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

    $(function() {
        $('#limit_date').datepicker();
    });
});
