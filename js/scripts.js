$(document).ready(function(){
  $("#addContact").submit(function(event){
    var name = $("#name").val();
    var phoneNum = $("#phoneNum").val();
    $("#contactList").append('<li class="list-group-item name"><span>'+ name +'</span></li><li class="list-group-item phoneNum" id="phoneclick"><span>'+phoneNum+'</span></li>')

    $("#name").val("");
    $("#phoneNum").val("")

    $(".name").last().click(function(){
      $(this).next().show();


    });

    event.preventDefault();
  });

});
