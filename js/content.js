//タスク入力部分
$(document).ready(function(){
  $('.task_input').click(function () {
    $(this).css("padding_bottom","15px");
    jQuery('.task_button').show();
    event.stopPropagation();
  });
  $('.made').click(function () {
    jQuery('.task_button').show();
    event.stopPropagation();
  });
  $(document).click(function() {
    $('.task_button').hide();
  });
  $('.task_input').each(function(){
    autosize(this);
  });
  $('.task_add_member button').click(function () {
    $(this).toggleClass("checked");
  });
  //カレンダー
  $("#date").datepicker({
    beforeShow: function(input, inst) {
          var calendar = inst.dpDiv;
          setTimeout(function() {
              calendar.position({
                  my: 'left bottom',
                  at: 'left top',
                  of: input
              });
          }, 1);
      }
  });
});
