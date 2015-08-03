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
});
