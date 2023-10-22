$(document).ready(function() {
    $('img').click(
      function() {
        let toTitle = $('input[name=ListTitle]').val();
        let toContent = $('textarea[name=ListContent]').val();
        if (toTitle != '') {
          $('ul').append('<li>' +
            '<b>' + toTitle + '</b>' + '<br>' + '<span>' + toContent + '</span>'
            + '</li>');
          $('input[name=ListTitle]').val('');
          $('textarea[name=ListContent]').val('');
        }
      })
  
    $(document).on('dblclick', 'li', function() {
      $(this).fadeOut(1000, 'swing', console.log('fadedout'));
    })
  
    $('ul').sortable();
  
  })
  
  