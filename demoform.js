$(document).ready(function(){
      $("#put1").click(function(){
          if($("#pwd").attr("type")== 'password'){
              $("#pwd").attr('type','text');
              $('span').text('Hide Password');
          }
          else{
            $("#pwd").attr('type','password');
            $('span').text('show Password'); 
          }
      });
       $('#pwd').keyup(function(){
           var val=this.value;
           var upperCase = RegExp('[A-Z]');
           if (upperCase.test(val)){
               $('#a').css('color','green');
               $('#a').removeClass('invalid');
               $('#a').addClass('valid');
           }
           else {
            $('#a').addClass('invalid'); 
            $('#a').removeClass('valid');
            $('#a').css('color','red');
           }
           var upperCase = RegExp('[0-9]');
           if (upperCase.test(val)){
               $('#b').css('color','green');
               $('#b').removeClass('invalid');
               $('#b').addClass('valid');
           }
           else {
            $('#b').addClass('invalid'); 
            $('#b').removeClass('valid');
            $('#b').css('color','red');
           }
           var upperCase = RegExp('[ @ # $ % ^ & * )( ? / " : ; , ~ `]');
           if (upperCase.test(val)){
               $('#c').css('color','green');
               $('#c').removeClass('invalid');
               $('#c').addClass('valid');
           }
           else {
            $('#c').addClass('invalid'); 
            $('#c').removeClass('valid');
            $('#c').css('color','red');
           }
           if (val.length>=6){
               $('#d').css('color','green');
               $('#d').removeClass('invalid');
               $('#d').addClass('valid');
           }
           else {
            $('#d').addClass('invalid'); 
            $('#d').removeClass('valid');
            $('#d').css('color','red');
           }
           var lowerCase = RegExp('[a-z]');
           if(lowerCase.test(val)){
               $('#e').css('color','green');
               $('#e').removeClass('invalid');
               $('#e').addClass('valid');  
           } 
           else{
                $('#e').addClass('invalid'); 
                $('#e').removeClass('valid');
                $('#e').css('color','red');
           }
        });
});  
