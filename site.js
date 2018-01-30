$('#contact-form').on('submit',
  function(e) {
    var email = $('#email').val();
    var emailcheck_regex = /.+@.+\..+/g;
    var regex_results = emailcheck_regex.exec(email);
    e.preventDefault();
    if ($("#form_check_results").length === 0) {
      $("<h1 id='form_check_results' class=''>TEST</h1>").insertAfter($(this));
    }
    if(!regex_results || regex_results.length > 1) {
      $("#form_check_results").attr('class', 'error_message');
      $("#form_check_results").text("Uh oh! Your email appears incorrect! Try again.");
    } else {
      $("#form_check_results").attr('class', 'thanks_message');
      $("#form_check_results").text("Thank you for signing up, " + regex_results[0] + "!");
      $(this).remove();
    }
  }
);
