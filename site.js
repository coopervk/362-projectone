$('#contact-form').on('submit',
  function(e) {
    // Get form element values
    var email = $('#email').val();
    var username = $('#username').val();
    var password = $('#password').val();
    // Declare regexes for form elements
    var emailcheck_regex = /.+@.+\..+/g;
    var usernamecheck_regex = /[\w]+/g;
    var passwordcheck_regex = /.+/g;
    // Check the elements against their regexes
    var email_results = emailcheck_regex.exec(email);
    var username_results = usernamecheck_regex.exec(username);
    var password_results = passwordcheck_regex.exec(password);
    // Prevent standar behavior of submission
    e.preventDefault();
    // Create element to talk to user about form data if it does not exist
    if($("#form_check_results").length === 0) {
      $("<h1 id='form_check_results' class=''>TEST</h1>").insertAfter($(this));
    }
    // Reset each form element's class, removing markings on now possibly correct elements
    $('#email').attr('class', "");
    $('#username').attr('class', "");
    $('#password').attr('class', "");
    // Yell at user if their email is invalid
    if(!email_results || email_results.length > 1) {
      $("#form_check_results").attr('class', 'error_message');
      $("#form_check_results").text("Uh oh! Your email appears incorrect! Try again.");
      $('#email').attr('class', 'incorrect_input');
    }
    // Yell at user if their username is invalid
    else if(!username_results || username_results.length > 1) {
      $("#form_check_results").attr('class', 'error_message');
      $("#form_check_results").text("Your username is invalid!");
      $('#username').attr('class', 'incorrect_input');
    }
    // Yell at user if their password is invalid
    else if(!password_results || password_results.length > 1) {
      $("#form_check_results").attr('class', 'error_message');
      $("#form_check_results").text("You need to enter a password!");
      $('#password').attr('class', 'incorrect_input');
    }
    // Thank user for completing form
    else {
      $("#form_check_results").attr('class', 'thanks_message');
      $("#form_check_results").text("Thank you for signing up, " + username_results[0] + "!");
      $(this).remove();
    }
  }
);
