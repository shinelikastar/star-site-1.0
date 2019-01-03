          $( function() {
            $( "#drag-on1" ).draggable({scroll:false});
          } );

          $( function() {
            $( "#drag-on2" ).draggable({scroll:false});
          } );

          $( function() {
            $( "#drag-on3" ).draggable({scroll:false});
          } );

          $(function() {
            $('#drag-on1').hover(function() { 
                $('#appear').fadeIn(); 
                $('#appear').toggleClass('highlight-heart');
            }, function() { 
                $('#appear').fadeOut(); 
                $('#appear').toggleClass('highlight-heart');
            });
        });

         $(function() {
            $('#drag-on2').hover(function() { 
                $('#appear2').fadeIn(); 
                $('#appear2').toggleClass('highlight-creamsicle');
            }, function() { 
                $('#appear2').fadeOut(); 
                $('#appear2').toggleClass('highlight-creamsicle');
            });
        });

         $(function() {
            $('#drag-on3').hover(function() { 
                $('#appear3').fadeIn(); 
                $('#appear3').toggleClass('highlight-icebaby');
            }, function() { 
                $('#appear3').fadeOut(); 
                $('#appear3').toggleClass('highlight-icebaby');
            });
        });