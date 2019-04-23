//With JavaScript

// var acc = document.getElementsByClassName('questions');

// for (var i = 0; i < acc.length; i++) {
//     acc[i].addEventListener('click', function() {
  

//         this.classList.toggle('active');

//         var panel = this.nextElementSibling;
//         if (panel) {
//         	panel.classList.toggle('show')
//         }
//     });
// }
//


//With jQuary

$(document).ready(function(){
	$(".questions").click(function(){
		$(this).next(".panel").slideToggle();
	});
});
//