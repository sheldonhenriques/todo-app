$(document).ready(function(){

    $('form').on('submit', function(){
  
        const item = $('form input').map(function(idx, elem) {
            return $(elem).val()
        }).get();
        const todoData = {
            item: item[0],
            listid:  item[1],
        };
        $.ajax({
          type: 'POST', 
          url: '/todo',
          data: todoData,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        })
  
        return false;
  
    })
  
    $('li').on('click', function(){
        var id = $(this).attr('id');
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + id,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        })
    })
  
  })