$(document).ready(function(){
    var displayValue = '0';   
    $('#result').text(displayValue);

    $('.key').each(function(){       
        $(this).click(function(e){
            if(displayValue == '0') displayValue = '';
            if($(this).text() == 'C')
            {
                displayValue = '0';
                $('#result').text(displayValue);
            }
            else if($(this).text() == '=')
            {
                try
                {
                    displayValue = eval(displayValue);
                    $('#result').text(displayValue);
                    displayValue = '0';
                }
            
                catch (e)
                {
                    displayValue = '0';
                    $('#result').text('ERROR');
                }               
            }
            else
            {
                displayValue += $(this).text();
                $('#result').text(displayValue);
            }
          
        })
    })
    $('body').css({
        'font-size' : '100%'
    });
    
    $('#calculator').css({
        'width' : '170px',
        'background-color' : '#484848',
        'padding' : '20px',
        'border-radius' : '10px'
    });
    
    $('#result').css({
        'width' : '155px',
        'height' : '35px',
        'background-color' : '#cddecc',
        'border-radius' : '5px',
        'margin-bottom' : '15px',
        'text-align' : 'right',
        'line-height' : '34px',
        'padding' : '0px 5px 0px 5px',
        'overflow': 'hidden',
        'font-size' : '25px'
    });
    
    $('.key').css({
        'width' : '35px',
        'background-color' : '#eeeeee',
        'display' : 'inline-block',
        'margin' : '3px 0px 8px 3px',
        'text-align' : 'center',
        'padding' : '5px 0px 5px 0px',
        'font-weight' : 'bold',
        'border-radius' : '4px',
        'cursor' : 'pointer'
    });
    
    $('.equal-key').css({
        'width' : '120px',
        'background-color' : '#4a9840',
        'color' : 'white'
    });
    
    $('.clear-key').css({
        'background-color' : '#bb1c09',
        'color' : 'white'
    });
    
    $('.key:active').css({
        'background-color' : '#a1a1a1'
    });
    $("#result").hover(
       function(){
        $(this).css("background-color","lightblue");
    }, function(){
        $(this).css('background-color','white');
      });
      $(".key").on("mouseenter", function(){ 
        $(".key").css({"color": 'brown'});          
      })
  
      $(".key").on("mouseleave", function(){ 
          $(".key").css({"color": 'red'});
      })
})