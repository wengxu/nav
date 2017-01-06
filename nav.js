console.log('hello');

$(document).ready(function() {
  document.getElementById('menu').addEventListener ('click', function() {
    console.log('menu is clicked');
    $('.sidenav').first().css({left: '40%'});
    $('.sidenav').first().addClass('show');
    
  });

  document.getElementById('close').addEventListener ('click', function() {
    $('.sidenav').first().css({left: '100%'});
    $('.sidenav').first().removeClass('show');

  });

  $(document).bind('click', function(e) {
    //console.log(e.target);
    var target = $(e.target);
    if (!target.is('.sidenav:first') && !target.parents().is('.sidenav:first') && !target.is('#menu') && $('.sidenav').first().hasClass('show')) {
      //console.log('need to close window');
      $('.sidenav').first().css({left: '100%'});
      $('.sidenav').first().removeClass('show');
    }
  });

  
});


