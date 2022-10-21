$(document).ready(function(){

    $('form').on('submit', function(){
  
        const item = $('form input').map(function(idx, elem) {
            return $(elem).val()
        }).get();
        const listData = {
            name: item[0],
            tag:  item[1],
            userid: item[2] ,
        };
        $.ajax({
          type: 'POST',
          url: '/list',
          data: listData,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        })
  
        return false;
  
    })
  
    $('li').on('click', function(){
        var id = $(this).attr('id');
        location.href = `/todo/${id}`
    })

    $('span').on('click', function(){
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