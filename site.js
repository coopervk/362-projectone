$('#contact-form').on('submit',
  function(e) {
    // Get form element values
    var email = $('#email').val();
    var username = $('#username').val();
    var password = $('#password').val();
    // Declare regexes for form elements
    var emailcheckregex = /.+@.+\..+/g;
    var usernamecheckregex = /[\w]+/g;
    var passwordcheckregex = /.+/g;
    // Check the elements against their regexes
    var emailresults = emailcheckregex.exec(email);
    var usernameresults = usernamecheckregex.exec(username);
    var passwordresults = passwordcheckregex.exec(password);
    // Prevent standar behavior of submission
    e.preventDefault();
    // Create element to talk to user about form data if it does not exist
    if($("#form-check-results").length === 0) {
      $("<p id='form-check-results' class=''>TEST</p>").insertAfter($(this));
    }
    // Reset each form element's class, removing markings on now possibly correct elements
    $('#email').attr('class', "");
    $('#username').attr('class', "");
    $('#password').attr('class', "");
    // Yell at user if their email is invalid
    if(!emailresults || emailresults.length > 1) {
      $("#form-check-results").attr('class', 'error-message');
      $("#form-check-results").text("Uh oh! Your email appears incorrect! Try again.");
      $('#email').attr('class', 'incorrect-input');
    }
    // Yell at user if their username is invalid
    else if(!usernameresults || usernameresults.length > 1) {
      $("#form-check-results").attr('class', 'error-message');
      $("#form-check-results").text("Your username is invalid!");
      $('#username').attr('class', 'incorrect-input');
    }
    // Yell at user if their password is invalid
    else if(!passwordresults || passwordresults.length > 1) {
      $("#form-check-results").attr('class', 'error-message');
      $("#form-check-results").text("You need to enter a password!");
      $('#password').attr('class', 'incorrect-input');
    }
    // Thank user for completing form
    else {
      $("#form-check-results").attr('class', 'thanks-message');
      $("#form-check-results").text("Thank you for signing up, " + usernameresults[0] + "!");
      $(this).remove();
    }
  }
);
