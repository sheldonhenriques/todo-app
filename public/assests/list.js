$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var todo = {item: item.val()};
        $.ajax({
          type: 'POST',
          url: '/list',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        })
  
        return false;
  
    })
  
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        var id = $(this).attr('id');
        $.ajax({
          type: 'DELETE',
          url: '/list/' + id,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        })
    })
  
  })