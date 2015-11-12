$("#cta input[type='email']").blur(function(e) {

    // Regex to check for email.  See: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (re.test($(this).val())) {
        collect_email();
    }

});