// ----------------------------VARIABLES----------------------------------------

var interlocutorSection =  $('#interlocutor').clone();
var userSection =  $('#own').clone();


var messageInterlocutor = ['slt','ça va','merci'];

var messageUser = $('.response').val();

var x = 0;









// -----------------------------FONCTIONS---------------------------------------

function duplicate (section,messages){
  section.find('.user-picture');
  section.find('.message').html(messages);
  section.appendTo('.logs');
  console.log(section);
}


$('.btn').click(function() {
    duplicate (userSection,messageUser);
    console.log(messageUser);
    setTimeout(duplicate,3000,interlocutorSection,messageInterlocutor[x]);
    x++;
    // $('.response').val(" ");
});

// $(document).keypress(function(e){
//     if(e.keyCode == 13) {
//       duplicate (userSection,messageUser);
//       setTimeout(duplicate,3000,interlocutorSection,messageInterlocutor[x]);
//       x++;
//       // $('.response').val(" ");
//     }
// });








// ------------------------------SCRIPT-----------------------------------------
