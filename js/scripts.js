$(document).ready(function(){
  $("#addContact").submit(function(event){
    var name = $("#name").val();
    var phoneNum = $("#phoneNum").val();
    $("#contactList").append('<li class="list-group-item name"><span>'+ name +'</span></li><li class="list-group-item phoneNum"><span>'+phoneNum+'</span></li>')

    $("#contactList li .name").click(function(){
      $(this).next().toggle();
    });

    event.preventDefault();
  });

});
