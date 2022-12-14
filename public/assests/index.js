$(document).ready(function(){

$('.tab a').on('click', function (e) {
  
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  })

  $('#signupform').on('submit', function(){
  
        const item = $('form input').map(function(idx, elem) {
            return $(elem).val()
        }).get();
        const signupData = {
            fullName: item[0],
            email:  item[1],
            password: item[2],
        };
        $.ajax({
        type: 'POST',
        url: '/signup',
        data: signupData,
        success: function(data){
            //do something with the data via front-end framework
            if(data._id){
                location.href = `/list/${data._id}`
            } else {
                location.reload()
            }
        }
        })
        return false;
    })

    $('#loginform').on('submit', function(){
  
        const item = $('form input').map(function(idx, elem) {
            return $(elem).val()
        }).get();
        const loginData = {
            email:  item[3],
            password: item[4],
        };
        $.ajax({
        type: 'POST',
        url: '/login',
        data: loginData,
        success: function(data){
            //do something with the data via front-end framework
            if(data._id){
                location.href = `/list/${data._id}`
            } else {
                location.reload()
            }
        }
        })
        return false;
    })

})
